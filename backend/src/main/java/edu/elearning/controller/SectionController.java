package edu.elearning.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.elearning.model.Section;
import edu.elearning.service.SectionService;
import edu.elearning.util.CompositeKey;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;

@RestController
@RequestMapping("/sections")
public class SectionController {
	
	@Autowired 
	private SectionService sectionService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public JsonResponseBody index(
			@RequestParam("pageIndex") int pageIndex,
			@RequestParam("pageSize") int pageSize
	) {
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setResult(sectionService.findParentId("index", pageIndex, pageSize));
		return response;
	}
	
	@RequestMapping(value = "/{seoName}", method = RequestMethod.GET)
	public JsonResponseBody getBySeoName(
			@PathVariable("seoName") String seoName
	) {
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setResult(sectionService.findOneBySeoName(seoName));
		return response;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public JsonResponseBody delete(
			@PathVariable("id") CompositeKey id
	) {
		sectionService.delete(id);
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
		
		if (validationResult.hasErrors()) {
			response.setStatus(HttpResponceStatus.FAIL);
			response.setResult(validationResult.getAllErrors());
			return response;
		}
		
		sectionService.save(section);
		
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("section_saved");
		return response;
	}
	
	@RequestMapping(value = "/{id}/subsectins", method = RequestMethod.GET)
	public JsonResponseBody getSubSections(
			@PathVariable("id") String id,
			@RequestParam("pageIndex") int pageIndex,
			@RequestParam("pageSize") int pageSize
	) {
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setResult(sectionService.findParentId(id, pageIndex, pageSize));
		return response;
	}
	
}
