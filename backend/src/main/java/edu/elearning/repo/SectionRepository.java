package edu.elearning.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import edu.elearning.model.Section;
import edu.elearning.util.CompositeKey;

public interface SectionRepository extends PagingAndSortingRepository<Section, CompositeKey> {

	@Query("{seoName:'?0'}")
	Section findOneBySeoName(String seoName);

	@Query("{parentId:'?0'}")
	Page<Section> findParentId(CompositeKey parentId, Pageable pageable);

	@Query(value = "{parentId:'?0'}", count = true)
	int count(CompositeKey parentId);
	
	@Query(value = "{idKey : ?0}", delete = true) 
	void delete(CompositeKey id);
}
