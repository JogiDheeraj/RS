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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.elearning.model.Image;
import edu.elearning.repo.ImageRepository;
import edu.elearning.util.CompositeKey;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;

@RequestMapping("/images")
public class ImageController extends AppController {
	
	@Autowired
	private ImageRepository imageRepository;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Image> index() {
		return imageRepository.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public JsonResponseBody delete(
			@PathVariable("id") CompositeKey id
	) {
		imageRepository.delete(id);
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("image_deleted");
		return response;
	}
	
	@ResponseBody
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public JsonResponseBody save(
			@Valid @RequestBody Image image,
			Errors validationResult,
			final RedirectAttributes redirectAttributes
	) {
		JsonResponseBody response = new JsonResponseBody();
		
		if (validationResult.hasErrors()) {
			response.setStatus(HttpResponceStatus.FAIL);
			response.setResult(validationResult.getAllErrors());
			return response;
		}
		
		if (
			imageRepository.count() > 7 && 
			imageRepository.findOne(image.getIdKey()) == null
		) {
			response.setStatus(HttpResponceStatus.FAIL);
			response.setMessage("image_number_error");
			return response;
		}
		imageRepository.save(image);
		
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("image_saved");
		return response;
	}
	
}
