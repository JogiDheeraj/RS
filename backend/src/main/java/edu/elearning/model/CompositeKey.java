package edu.elearning.model;

import java.io.Serializable;

public class CompositeKey implements Serializable {

	private static final long serialVersionUID = 1L;

	private String id;
	
	private String siteVariant;

	public CompositeKey(String id, String siteVariant) {
		this.id = id;
		this.siteVariant = siteVariant;
	}
	
	@SuppressWarnings("unused")
	private CompositeKey() { }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSiteVariant() {
		return siteVariant;
	}

	public void setSiteVariant(String siteVariant) {
		this.siteVariant = siteVariant;
	}

}
