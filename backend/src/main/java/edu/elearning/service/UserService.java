package edu.elearning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
	
	public Page<User> findAll(String siteVariant, int pageIndex, int pageSize) {
		return userRepository.findAll(siteVariant, new PageRequest(pageIndex, pageSize));
	}

	public User findOne(CompositeKey id) {
		return userRepository.findOne(id);
	}
	
	public void delete(CompositeKey id) {
		userRepository.delete(id);
	}
}
