package edu.elearning.model;

import edu.elearning.util.CompositeKey;

public abstract class BaseModel {
	
	private CompositeKey idKey;
	
	public CompositeKey getIdKey() {
		return idKey;
	}

	public void setIdKey(CompositeKey idKey) {
		this.idKey = idKey;
	}

}
