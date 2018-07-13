package edu.elearning.controller;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.elearning.job.Job;
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

	private Map<UUID, Job> webspiderJobList = new HashMap<UUID, Job>();

	@RequestMapping()
	public Collection<Job> index() {
		return webspiderJobList.values();
	}

	@RequestMapping(value = "/{id}/start/", method = RequestMethod.PUT)
	public void execute(@PathVariable("id") UUID id) {
		taskExecutor.execute(webspiderJobList.get(id));
	}
	
	@RequestMapping(value = "/{id}/stop/", method = RequestMethod.PUT)
	public void stop(@PathVariable("id") UUID id) {
		webspiderJobList.get(id).interrupt();
	}
	
	@RequestMapping(value = "/{id}/resum/", method = RequestMethod.PUT)
	public void resum(@PathVariable("id") UUID id) {
		webspiderJobList.get(id).resum();
	}

	@RequestMapping(value = "/site1", method = RequestMethod.GET)
	public void side1() {
		System.out.println("called spider1");
		Selectors s = new Selectors();
		s.addSelector("title", PropertyType.STRING, "h1[itemprop='name']");
		s.addSelector("", PropertyType.STRING, "");
		s.addSelector("", PropertyType.STRING, "");
		s.addSelector("", PropertyType.STRING, "");
		UUID id = UUID.randomUUID();
		WebSpider spider = new WebSpider(id, template, "http://wibside1.com/", s);
		webspiderJobList.put(id, spider);
	}

	@RequestMapping(value = "/site2", method = RequestMethod.GET)
	public void side2() {
		System.out.println("called spider2");
		Selectors s = new Selectors();
		s.addSelector("title", PropertyType.STRING, "h1[itemprop='name']");
		UUID id = UUID.randomUUID();
		WebSpider spider = new WebSpider(id, template, "http://pd4ml.com/", s);
		webspiderJobList.put(id, spider);
	}

}
