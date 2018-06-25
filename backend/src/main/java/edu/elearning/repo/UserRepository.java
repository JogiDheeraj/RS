package edu.elearning.repo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.elearning.model.User;
import edu.elearning.util.CompositeKey;

public interface UserRepository extends MongoRepository<User, CompositeKey> {

	@Query("{username:'?0'}")
	User findOneByUsername(String userName);

	@Query("{email:'?0'}")
	User findOneByEmail(String userEmail);
	
	@Query(value = "{idKey : ?0}", delete = true) 
	void delete(CompositeKey id);
	
	@Query(value = "{idKey : ?0}")
	User findOne(CompositeKey id);
	
	@Query(value = "{idKey.siteVariant : ?0}")
	Page<User> findAll(String siteVariant, Pageable pageable);
}
