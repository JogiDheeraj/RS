package edu.elearning.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.elearning.model.Article;
import edu.elearning.model.CompositeKey;

public interface ArticleRepository extends MongoRepository<Article, CompositeKey> {
	
	@Query("{seoName:'?0'}")
	Article findOneBySeoName(String seoName);
	
}
