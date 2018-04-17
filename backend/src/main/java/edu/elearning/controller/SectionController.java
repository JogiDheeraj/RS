package edu.elearning.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.elearning.model.Section;
import edu.elearning.repo.SectionRepository;

@RestController
@RequestMapping("/sections")
public class SectionController {
	
	@Autowired 
	private SectionRepository sectionRepository;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Section> index(){
		return sectionRepository.findOneByParentId("index");
	}
}
