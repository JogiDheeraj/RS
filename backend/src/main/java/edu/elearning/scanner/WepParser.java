package edu.elearning.scanner;

import org.jsoup.Jsoup;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import org.jsoup.Connection;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.mongodb.BasicDBObject;

public class WepParser {
	
	private static final String USER_AGENT = 
			"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.112 Safari/535.1";
	private List<String> links = new LinkedList<String>();
	private Document htmlDocument;
	private String mainUrl;
	private BasicDBObject document;
	
	public WepParser(String mainUrl) {
		this.mainUrl = mainUrl;
	}

	public boolean crawl(String url) {
		try {
			
			Connection connection = Jsoup.connect(url).userAgent(USER_AGENT);
			Document htmlDocument = connection.get();
			this.htmlDocument = htmlDocument;
			
			if (connection.response().statusCode() == 200) {
				System.out.println("\n**Visiting** Received web page at " + url);
			}
			
			if (!connection.response().contentType().contains("text/html")) {
				System.out.println("**Failure** Retrieved something other than HTML");
				return false;
			}
			
			Elements linksOnPage = htmlDocument.select("a[href]");
			System.out.println("Found (" + linksOnPage.size() + ") links");
			for (Element link : linksOnPage) {
				if (
					!link.absUrl("href").isEmpty() &&
					link.absUrl("href").toLowerCase().contains(mainUrl.toLowerCase())
				) {
					this.links.add(link.absUrl("href"));
				}
			}
			
			return true;
		} catch (IOException ioe) {
			return false;
		}
	}

	public boolean searchForArticle(Selectors selectors) {
		
		if (this.htmlDocument == null) {
			System.out.println("ERROR! Call crawl() before performing analysis on the document");
			return false;
		}
		
		for(String proparty: selectors.getProparties()) {
			Elements e = htmlDocument.select(selectors.getPropertySelector(proparty));
			switch (selectors.getPropertyType(proparty)) {
				case STRING:
					document.put(proparty , e.html());
					break;
				case KEYWORDS:
					document.put(proparty , e.html());
				//@Todo add the rest of properties type here
				default:
					document.put(proparty , e.html());
			}
		}
		
		return true;
	}
	
	public List<String> getLinks() {
		return this.links;
	}

	public BasicDBObject getArticle() {
		return this.document;
	}
}
