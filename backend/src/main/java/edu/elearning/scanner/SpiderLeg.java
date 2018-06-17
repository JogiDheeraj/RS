package edu.elearning.scanner;

import org.jsoup.Jsoup;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import org.jsoup.Connection;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import edu.elearning.model.Article;

public class SpiderLeg {
	
	private static final String USER_AGENT = 
			"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.112 Safari/535.1";
	private List<String> links = new LinkedList<String>();
	private Document htmlDocument;
	
	private Article article;

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
				
//				if (link.attr("href").toLowerCase().contains(mainUrl.toLowerCase())
//						|| !link.attr("href").toLowerCase().contains("http://")
//						|| !link.attr("href").toLowerCase().contains("https://")
//				) {
//					this.links.add(link.absUrl("href"));
//				}
				this.links.add(link.absUrl("href"));
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
		//System.out.println("Searching for the word " + searchWord + "...");
		//String bodyText = this.htmlDocument.body().text();
		//bodyText.toLowerCase().contains(searchWord.toLowerCase());
		
		String title = htmlDocument.title();
		Elements images = htmlDocument.select("img[src~=(?i)\\.(png|jpe?g|gif)]");
		for (Element image : images) {
			System.out.println("\nsrc : " + image.attr("src"));
			System.out.println("height : " + image.attr("height"));
			System.out.println("width : " + image.attr("width"));
			System.out.println("alt : " + image.attr("alt"));
		}
		
		return true;
	}
	
	public List<String> getLinks() {
		return this.links;
	}

	public Article getArticle() {
		return this.article;
	}
}
