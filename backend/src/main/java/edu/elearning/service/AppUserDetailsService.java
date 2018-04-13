package edu.elearning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import edu.elearning.model.User;

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UserService userService;
	
	public UserDetails loadUserByUsername(String username, boolean loadRoles)
		    throws UsernameNotFoundException {
		return loadUserByUsername(username);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userService.findbyUserName(username);
		if (user == null) throw new UsernameNotFoundException("User not found");
		return user;
	}

}

