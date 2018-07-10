package edu.elearning.scanner;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.UUID;

import org.springframework.messaging.simp.SimpMessagingTemplate;

import com.mongodb.BasicDBObject;

import edu.elearning.job.JobRunner;


public class WebSpider extends JobRunner {
	
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
		
		// send WS RUNNING status for front end
		this.state = "RUNNING";
		this.sendProgress();
				
		List<String> pagesVisited = new ArrayList<String>();
		Queue<String> pagesToVisit = new LinkedList<String>();
		
		List<BasicDBObject> articleFound = new ArrayList<BasicDBObject>();
		pagesToVisit.add(mainUrl);
		
		String currentUrl;
		WepParser parser;
		
		while (pagesToVisit.size() > 0) {
			
			parser = new WepParser(mainUrl);
			currentUrl = pagesToVisit.poll();
			
			if (
				parser.crawl(currentUrl) && 
				parser.searchForDocument(selectors)
			) {
				articleFound.add(parser.getDocument());
			}
			
			pagesVisited.add(currentUrl);
			
			for(int i=0; i < parser.getLinks().size() ;i++) {
				if(!pagesVisited.contains(parser.getLinks().get(i))) {
					pagesToVisit.add(parser.getLinks().get(i));
				}
			}
		}
		
		//System.out.println("\n**Done** Visited " + pagesVisited.size() + " web page(s)");
		
		// send WS DONE status for front end
		this.state = "DONE";
		this.sendProgress();
	}
	
}

