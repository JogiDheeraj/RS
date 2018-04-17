package edu.elearning.controller;

import java.security.Principal;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
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
import edu.elearning.repo.ArticleRepository;
import edu.elearning.repo.SectionRepository;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;


@RestController
@RequestMapping("/sections/{sectionid}/articles")
public class ArticleController {
	
	@Autowired 
	private SectionRepository sectionRepository;
	
	@Autowired
	private ArticleRepository articleRepository;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<Article> index(
			@PathVariable("sectionid") String sectionid
	) {
		return sectionRepository.findOne(sectionid).getArticles();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Article getById(
			@PathVariable("id") String id
	) {
		Article article = articleRepository.findOneBySeoName(id);
		return article;
	}
	
	@RequestMapping(value = "/{seoName}", method = RequestMethod.GET)
	public Article getBySeoName(
			@PathVariable("seoName") String seoName
	) {
		Article article = articleRepository.findOneBySeoName(seoName);
		return article;
	}
	
	@RequestMapping(value = "/delete/{id}", method= RequestMethod.DELETE)
	public String delete(
			@PathVariable("sectionid") String sectionid,
			@PathVariable("id") String id,
			final RedirectAttributes redirectAttributes
	) {
		articleRepository.delete(id);
		redirectAttributes.addFlashAttribute("message", "article_deleted");
		return "redirect:/sections/"+ sectionid+ "/articles";
	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = RequestMethod.PUT)
	@Secured({"ADMIN"})
	public JsonResponseBody save(
			Principal principal,
			@Valid @RequestBody Article article,
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
		
		article.setLastUpdate(new Date());
		User user = (User) principal;
		article.setLastUpdater(user);
		articleRepository.save(article);
		
		return response;
	}
	
}
