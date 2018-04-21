package edu.elearning.controller;

import java.security.Principal;
import java.util.Date;

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

import edu.elearning.model.Article;
import edu.elearning.model.User;
import edu.elearning.service.ArticleService;
import edu.elearning.service.SectionService;
import edu.elearning.util.CompositeKey;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;

@RestController
@RequestMapping("/sections/{sectionid}/articles")
public class ArticleController {
	
	@Autowired 
	private SectionService sectionService;
	
	@Autowired
	private ArticleService articleService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public JsonResponseBody index(
			@PathVariable("sectionid") CompositeKey sectionid
	) {
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setResult(sectionService.findOne(sectionid).getArticles());
		return response;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public JsonResponseBody getById(
			@PathVariable("id") CompositeKey id
	) {
		Article article = articleService.findOne(id);
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setResult(article);
		return response;
	}
	
	@RequestMapping(value = "/{seoName}", method = RequestMethod.GET)
	public JsonResponseBody getBySeoName(
			@PathVariable("seoName") String seoName
	) {
		Article article = articleService.findOneBySeoName(seoName);
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setResult(article);
		return response;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public JsonResponseBody delete(
			@PathVariable("id") CompositeKey id
	) {
		articleService.delete(id);
		JsonResponseBody response = new JsonResponseBody();
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("article_deleted");
		return response;
	}
	
	@ResponseBody
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public JsonResponseBody save(
			Principal principal,
			@Valid @RequestBody Article article,
			Errors validationResult,
			final RedirectAttributes redirectAttributes
	) {
		JsonResponseBody response = new JsonResponseBody();
		
		if (validationResult.hasErrors()) {
			response.setStatus(HttpResponceStatus.FAIL);
			response.setResult(validationResult.getAllErrors());
			return response;
		}
		
		article.setLastUpdate(new Date());
		User user = (User) principal;
		article.setLastUpdater(user);
		articleService.save(article);
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("article_saved");
		return response;
	}
	
}
