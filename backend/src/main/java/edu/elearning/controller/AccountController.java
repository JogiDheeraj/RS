package edu.elearning.controller;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.elearning.model.User;
import edu.elearning.service.UserService;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;

@RestController
@RequestMapping("/account")
public class AccountController {
	
	//public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

	@Autowired
	private UserService userService;

	// request method to create a new account by a guest
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public JsonResponseBody createUser(
			@Valid @RequestBody User user, 
			Errors validationResult,
			final RedirectAttributes redirectAttributes
	) {

		JsonResponseBody response = new JsonResponseBody();

		if (validationResult.hasErrors()) {
			response.setStatus(HttpResponceStatus.FAIL);
			response.setResult(validationResult.getAllErrors());
			return response;
		}

		if (userService.findbyUserName(user.getUsername()) != null
				|| userService.findbyUserEmail(user.getEmail()) != null) {
			//logger.error("Username Already exist " + user.getUsername());
			response.setStatus(HttpResponceStatus.FAIL);
			response.setMessage("username_exist");
			return response;
		}

		user.setRole("USER");
		userService.save(user);
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("username_created");
		return response;
	}

	// this is the login
	@RequestMapping("/login")
	public Principal login(Principal user) {
		return user;
	}
}
