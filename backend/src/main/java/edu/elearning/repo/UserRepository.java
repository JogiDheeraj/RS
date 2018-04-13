package edu.elearning.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import edu.elearning.model.User;

public interface UserRepository extends MongoRepository<User, String> {

	@Query("{username:'?0'}")
	User findOneByUsername(String userName);
	
	@Query("{email:'?0'}")
	User findOneByEmail(String userEmail);

}
