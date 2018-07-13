package edu.elearning.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.elearning.model.User;
import edu.elearning.service.UserService;
import edu.elearning.util.CompositeKey;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;

@RestController
@RequestMapping("/users")
public class UsersController {
	
	@Autowired 
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.GET)
	public Page<User> index(
			@RequestParam("pageIndex") int pageIndex,
			@RequestParam("pageSize") int pageSize,
			HttpServletRequest request
	) {
		return userService.findAll(request.getHeader("Host"), pageIndex, pageSize);
	}
	
	@RequestMapping(value = "/{id}/lock", method = RequestMethod.PUT)
	public JsonResponseBody lock(
			@PathVariable("id") CompositeKey id
	) {	
		JsonResponseBody response = new JsonResponseBody();
		User user = userService.findOne(id);
		if (user != null) {
			user.setAccountNonLocked(false);
			userService.save(user);
			response.setMessage("user_locked");
			response.setStatus(HttpResponceStatus.SUCCESS);
		} else {
			response.setMessage("user_not_found");
			response.setStatus(HttpResponceStatus.FAIL);
		}
		return response;
	}
	
	
	@RequestMapping(value = "/{id}/unlock", method = RequestMethod.PUT)
	public JsonResponseBody unlock(
			@PathVariable("id") CompositeKey id
	) {	
		JsonResponseBody response = new JsonResponseBody();
		User user = userService.findOne(id);
		if (user != null) {
			user.setAccountNonLocked(true);
			userService.save(user);
			response.setMessage("user_unlocked");
			response.setStatus(HttpResponceStatus.SUCCESS);
		} else {
			response.setMessage("user_not_found");
			response.setStatus(HttpResponceStatus.FAIL);
		}
		return response;
	}
	
	@ResponseBody
	@RequestMapping(method = RequestMethod.POST)
	public JsonResponseBody save(
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
		
		userService.save(user);
		
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setMessage("user_saved");
		return response;
	}
	
}
