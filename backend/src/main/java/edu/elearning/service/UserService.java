package edu.elearning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.elearning.model.User;
import edu.elearning.repo.UserRepository;
import edu.elearning.util.CompositeKey;

@Service
public class UserService extends UUIDService {

	@Autowired
	private UserRepository userRepository;

	public void save(User user) {
		if (isNew(user)) {
			generateId(user);
		}
		userRepository.save(user);
	}

	public User findbyUserName(String userName) {
		return userRepository.findOneByUsername(userName);
	}
	
	public User findbyUserEmail(String userEmail) {
		return userRepository.findOneByEmail(userEmail);
	}

	public User find(CompositeKey id) {
		return userRepository.findOne(id);
	}
}
