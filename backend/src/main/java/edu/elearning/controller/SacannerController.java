package edu.elearning.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.elearning.scanner.PropertyType;
import edu.elearning.scanner.Selectors;
import edu.elearning.scanner.WebSpider;

@RestController
@RequestMapping("/scanners")
public class SacannerController {
	
	
	@Autowired
	private WebSpider p;
	
	@RequestMapping(value = "/site1", method = RequestMethod.GET)
	public void side1() {
		
		Selectors s = new Selectors();
		s.addSelector("title", PropertyType.STRING , "h1[itemprop='name']");
		s.addSelector("",  PropertyType.STRING, "");
		s.addSelector("",  PropertyType.STRING, "");
		s.addSelector("",  PropertyType.STRING, "");
		p.sannWebSide("http://wibside1.com/", s);
		
	}
	
	@RequestMapping(value = "/site2", method = RequestMethod.GET)
	public void side2() {

		Selectors s = new Selectors();
		s.addSelector("title",  PropertyType.STRING , "h1[itemprop='name']");
		p.sannWebSide("http://pd4ml.com/", s);
		
	}
	
}
