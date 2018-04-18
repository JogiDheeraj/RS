package edu.elearning.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.elearning.model.Section;
import edu.elearning.repo.SectionRepository;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;

@RestController
@RequestMapping("/sections")
public class SectionController {
	
	@Autowired 
	private SectionRepository sectionRepository;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Section> index(){
		return sectionRepository.findParentId("index");
	}
	
	@RequestMapping(value = "/{seoName}", method = RequestMethod.GET)
	public Section getBySeoName(
			@PathVariable("seoName") String seoName
	) {
		return sectionRepository.findOneBySeoName(seoName);
	}
	
	@RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
	public JsonResponseBody delete(
			@PathVariable("id") String id
	) {
		sectionRepository.delete(id);
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("section_deleted");
		return response;
	}
	
	@ResponseBody
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public JsonResponseBody save(
			@Valid @RequestBody Section section,
			Errors validationResult,
			final RedirectAttributes redirectAttributes
	) {
		JsonResponseBody response = new JsonResponseBody();
		
		if(validationResult.hasErrors())
		{
			response.setStatus(HttpResponceStatus.FAIL);
			response.setResult(validationResult.getAllErrors());
			return response;
		}
		
		sectionRepository.save(section);
		
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("section_saved");
		return response;
	}
	
	@RequestMapping(value = "/subsectins/{id}", method = RequestMethod.GET)
	public List<Section> getSubSections(
			@PathVariable("id") String id
	){
		return sectionRepository.findParentId(id);
	}
	
}
