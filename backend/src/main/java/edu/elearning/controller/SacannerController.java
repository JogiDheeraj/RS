package edu.elearning.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.elearning.scanner.WebSpider;

@RestController
@RequestMapping("/scanners")
public class SacannerController {
	
	
	@Autowired
	private WebSpider p;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public void index() {
		try {
			p.scannPage("http://pd4ml.com/examples.htm");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
