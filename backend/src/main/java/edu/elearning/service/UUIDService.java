package edu.elearning.service;

import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;

import edu.elearning.model.BaseModel;
import edu.elearning.util.CompositeKey;

public abstract class UUIDService {

	@Autowired
	private HttpServletRequest request;

	protected void generateId(BaseModel entity) {
		entity.setIdKey(
				new CompositeKey(
					UUID.randomUUID().toString(), 
					request.getHeader("Host")
				));
	}

	protected boolean isNew(BaseModel entity) {
		if(
			entity.getIdKey() == null || 
			entity.getIdKey().getUuid().isEmpty()
		) {
			return true;
		} 
		entity.getIdKey().setSiteVariant(request.getHeader("Host"));
		return false;
	}

}
