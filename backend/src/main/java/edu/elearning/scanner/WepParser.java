package edu.elearning.scanner;

import org.jsoup.Jsoup;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.util.LinkedHashSet;
import java.util.Set;

import org.jsoup.Connection;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.mongodb.BasicDBObject;

public class WepParser {
	
	private static Logger LOGGER = LogManager.getLogger(WepParser.class);

	private static final String USER_AGENT = 
			"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.112 Safari/535.1";
	private Set<String> links;
	private Document htmlDocument;
	private String mainUrl;
	private BasicDBObject document;

	public WepParser(String mainUrl) {
		this.mainUrl = mainUrl;
	}

	public boolean crawl(String url) {
		try {
			Connection connection = Jsoup.connect(url).userAgent(USER_AGENT); 
			htmlDocument = connection.get();
			
			if (
				connection.response().statusCode() != 200 ||
				!connection.response().contentType().contains("text/html")
			) {
				return false;
			}

			Elements linksOnPage = htmlDocument.select("a[href]");
			links = new LinkedHashSet<String>();
			
			for (Element link : linksOnPage) {
				if (
					!link.absUrl("href").isEmpty()
					&& link.absUrl("href").toLowerCase().contains(mainUrl.toLowerCase())
					&& !links.contains(link.absUrl("href").trim())
				) {
					this.links.add(link.absUrl("href").trim());
					LOGGER.info("Found (" + link.absUrl("href").trim() + ")");
				}
			}

			return true;
		} catch (IOException ioe) {
			LOGGER.warn(ioe.getMessage(), ioe);
			return false;
		}
	}

	public boolean searchForDocument(Selectors selectors) {

		if (htmlDocument == null) {
			LOGGER.warn("ERROR! Call crawl() before performing analysis on the document");
			return false;
		}

		for (String proparty : selectors.getProparties()) {
			Elements e = htmlDocument.select(selectors.getPropertySelector(proparty));
			if (e.size() > 0) {
				switch (selectors.getPropertyType(proparty)) {
				case STRING:
					document.put(proparty, e.html());
					break;
				case KEYWORDS:
					document.put(proparty, e.html());
					// @Todo add the rest of properties type here
				default:
					document.put(proparty, e.html());
				}
			} else {
				return false;
			}
		}

		return true;
	}

	public Set<String> getLinks() {
		return this.links;
	}

	public BasicDBObject getDocument() {
		return this.document;
	}
}
