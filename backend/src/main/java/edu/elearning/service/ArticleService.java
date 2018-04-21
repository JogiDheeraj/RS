package edu.elearning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.elearning.model.Article;
import edu.elearning.repo.ArticleRepository;
import edu.elearning.util.CompositeKey;

@Service
public class ArticleService extends UUIDService {
	
	@Autowired
	private ArticleRepository articleRepository;

	public void save(Article article) {
		if (isNew(article)) {
			generateId(article);
		}
		articleRepository.save(article);
	}

	public void delete(CompositeKey id) {
		articleRepository.delete(id);
	}

	public Article findOneBySeoName(String seoName) {
		return articleRepository.findOneBySeoName(seoName);
	}

	public Article findOne(CompositeKey id) {
		return articleRepository.findOne(id);
	}
	
	
}
