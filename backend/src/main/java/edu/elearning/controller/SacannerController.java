package edu.elearning.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import edu.elearning.scanner.PropertyType;
import edu.elearning.scanner.Selectors;
import edu.elearning.scanner.WebSpider;


@RestController
@RequestMapping("/scanners")
public class SacannerController {
	
	@Autowired
	private ThreadPoolTaskExecutor taskExecutor;

	@Autowired
	private SimpMessagingTemplate template;
	
	private Map<UUID ,WebSpider> webspiderJobList = new HashMap<UUID, WebSpider>();
	
	@RequestMapping()
	public Set<UUID> index() {
		return webspiderJobList.keySet();
	}
	
	@RequestMapping(value = "/execute/{id}", method = RequestMethod.GET)
	public void execute(@PathVariable("id") UUID id) {
		taskExecutor.execute(webspiderJobList.get(id));
	}
	
	@RequestMapping(value = "/site1", method = RequestMethod.GET)
	public void side1() {
		Selectors s = new Selectors();
		s.addSelector("title", PropertyType.STRING , "h1[itemprop='name']");
		s.addSelector("",  PropertyType.STRING, "");
		s.addSelector("",  PropertyType.STRING, "");
		s.addSelector("",  PropertyType.STRING, "");
		UUID id = UUID.randomUUID();
		WebSpider spider = new WebSpider(id, template, "http://wibside1.com/", s);
		webspiderJobList.put(id, spider);
	}
	
	@RequestMapping(value = "/site2", method = RequestMethod.GET)
	public void side2() {
		Selectors s = new Selectors();
		s.addSelector("title",  PropertyType.STRING , "h1[itemprop='name']");
		UUID id = UUID.randomUUID();
		WebSpider spider = new WebSpider(id, template, "http://pd4ml.com/", s);
		webspiderJobList.put(id, spider);
	}
	
	@RequestMapping(value = "/sim-status")
	@ResponseBody
	@SubscribeMapping("initial")
	public Map<UUID ,WebSpider> fetchStatus() {
		return this.webspiderJobList;
	}
	
}
