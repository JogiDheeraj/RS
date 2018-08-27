package edu.elearning.scanner;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Set;
import java.util.UUID;

import org.springframework.messaging.simp.SimpMessagingTemplate;

import com.mongodb.BasicDBObject;

import edu.elearning.job.Job;
import edu.elearning.job.JobStatus;

public class WebSpider extends Job {
	
	private static Logger lOGGER = LogManager.getLogger(WepParser.class);
	
	private String mainUrl;
	private Selectors selectors;

	public WebSpider(
			UUID jobID,
			SimpMessagingTemplate template,
			String mainUrl, 
			Selectors selectors
	) {
		super(jobID, template);
		this.mainUrl = mainUrl;
		this.selectors = selectors;
		this.sendProgress();
	}
	
	@Override
	public void run() {	
		
		this.state = JobStatus.RUNNING;
		this.started = new Date();
		this.sendProgress();
		
		Set<String> visitedPages = new LinkedHashSet<String>();
		Queue<String> pagesToVisit = new LinkedList<String>();
		List<BasicDBObject> articleFound = new ArrayList<BasicDBObject>();
		
		WepParser parser = new WepParser(mainUrl);
		pagesToVisit.add(mainUrl.trim());
		String currentUrl;
		
		while (pagesToVisit.size() > 0) {
			if (!this.interrupted) { 
				
				currentUrl = pagesToVisit.poll();
				visitedPages.add(currentUrl.trim());
				lOGGER.info("Visiting (" + currentUrl + ")");
				
				if (parser.crawl(currentUrl)) {
					articleFound.add(parser.getDocument());
					this.message = "\n**Visiting** web page at " + currentUrl;
					this.sendProgress();
					
					if (parser.searchForDocument(selectors)) {
						articleFound.add(parser.getDocument());
						this.message = "\n**Found** documnet at " + currentUrl;
						this.sendProgress();
					}
				}
				
				for (String link : parser.getLinks()) {
					if (
						!visitedPages.contains(link)
						&& !pagesToVisit.contains(link)
					) {
						lOGGER.info("Add (" + link + ")");
						pagesToVisit.add(link);
					}
				}
			}
		}
		
		this.state = JobStatus.DONE;
		this.ended = new Date();
		this.sendProgress();
	}
	
}

