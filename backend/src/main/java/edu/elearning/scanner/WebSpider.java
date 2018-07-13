package edu.elearning.scanner;

import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.UUID;

import org.springframework.messaging.simp.SimpMessagingTemplate;

import com.mongodb.BasicDBObject;

import edu.elearning.job.Job;
import edu.elearning.job.JobStatus;

public class WebSpider extends Job {
	
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
		this.sendProgress();
		this.started = new Date();
				
		List<String> pagesVisited = new ArrayList<String>();
		Queue<String> pagesToVisit = new LinkedList<String>();
		
		List<BasicDBObject> articleFound = new ArrayList<BasicDBObject>();
		pagesToVisit.add(mainUrl);
		
		String currentUrl;
		WepParser parser;
		
		while (pagesToVisit.size() > 0) {
			
			parser = new WepParser(mainUrl);
			currentUrl = pagesToVisit.poll();
			
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
			
			pagesVisited.add(currentUrl);
			
			for (int i = 0; i < parser.getLinks().size(); i++) {
				if (!pagesVisited.contains(parser.getLinks().get(i))) {
					pagesToVisit.add(parser.getLinks().get(i));
				}
			}
		}
		
		this.state = JobStatus.DONE;
		this.sendProgress();
		this.ended = new Date();
	}
	
}

