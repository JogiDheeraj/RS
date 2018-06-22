package edu.elearning.scanner;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import org.springframework.stereotype.Service;

import com.mongodb.BasicDBObject;

@Service
public class WebSpider {
	
	
	public void sannWebSide(String mainUrl, Selectors selectors) {
		
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
		
		System.out.println("\n**Done** Visited " + pagesVisited.size() + " web page(s)");
	}
	
	
	
}

