package edu.elearning.model;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import edu.elearning.util.CompositeKey;

public abstract class BaseModel {
	
	@JsonIgnore
	@Id
	private String id;
	
	private CompositeKey idKey;
	
	public CompositeKey getIdKey() {
		return idKey;
	}

	public void setIdKey(CompositeKey idKey) {
		this.idKey = idKey;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getId() {
		return this.id;
	}

}
