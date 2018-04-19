package edu.elearning.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.elearning.model.Section;
import edu.elearning.util.CompositeKey;

public interface SectionRepository extends MongoRepository<Section, CompositeKey> {

	@Query("{seoName:'?0'}")
	Section findOneBySeoName(String seoName);
	
	@Query("{parentId:'?0'}")
	List<Section> findParentId(String parentId);
}
