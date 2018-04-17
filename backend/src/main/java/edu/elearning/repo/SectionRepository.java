package edu.elearning.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.elearning.model.Section;

public interface SectionRepository extends MongoRepository<Section, String> {

	@Query("{seoName:'?0'}")
	Section findOneBySeoName(String seoName);
	
	@Query("{parentId:'?0'}")
	List<Section> findOneByParentId(String parentId);
}
