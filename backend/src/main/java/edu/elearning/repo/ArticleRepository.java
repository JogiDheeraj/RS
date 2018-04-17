package edu.elearning.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.elearning.model.Article;

public interface ArticleRepository extends MongoRepository<Article, String>{
	
	@Query("{seoName:'?0'}")
	Article findOneBySeoName(String seoName);
}
