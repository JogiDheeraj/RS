package edu.elearning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.elearning.model.User;
import edu.elearning.repo.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User save(User user) {
		return userRepository.save(user);
	}

	public User findbyUserName(String userName) {
		return userRepository.findOneByUsername(userName);
	}
	
	public User findbyUserEmail(String userEmail) {
		return userRepository.findOneByEmail(userEmail);
	}

	public User find(String id) {
		return userRepository.findOne(id);
	}
}
