package edu.elearning.scanner;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import edu.elearning.model.Article;

public class WebSpider {

	private static final int MAX_PAGES_TO_SEARCH = 100000;
	private Set<String> pagesVisited = new HashSet<String>();
	private List<String> pagesToVisit = new LinkedList<String>();

	Selectors selectors;

	public void sannWebSide(String mainUrl, Selectors selectors) {
		
		List<Article> articleFound = new ArrayList<Article>();
		
		while (this.pagesVisited.size() < MAX_PAGES_TO_SEARCH) {
			String currentUrl;
			SpiderLeg leg = new SpiderLeg();
			if (this.pagesToVisit.isEmpty()) {
				currentUrl = mainUrl;
				this.pagesVisited.add(mainUrl);
			} else {
				currentUrl = this.nextUrl();
			}
			leg.crawl(currentUrl);
			
			if (leg.searchForArticle(selectors)) {
				articleFound.add(leg.getArticle());
			}
			
			this.pagesToVisit.addAll(leg.getLinks());
		}
		System.out.println("\n**Done** Visited " + this.pagesVisited.size() + " web page(s)");
	}

	private String nextUrl() {
		String nextUrl;
		do {
			nextUrl = this.pagesToVisit.remove(0);
		} while (this.pagesVisited.contains(nextUrl));
		this.pagesVisited.add(nextUrl);
		return nextUrl;
	}
	
}

