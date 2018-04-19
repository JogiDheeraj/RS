package edu.elearning.util;

import java.io.Serializable;

import org.springframework.data.mongodb.core.index.CompoundIndex;

@CompoundIndex(def = "{'UUID':1, 'siteVariant':1}", name = "compound_index")
public class CompositeKey implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String UUID;
	
	private String siteVariant;

	public CompositeKey(String UUID, String siteVariant) {
		this.UUID = UUID;
		this.siteVariant = siteVariant;
	}
	
	@SuppressWarnings("unused")
	private CompositeKey() { }

	public String getUUID() {
		return UUID;
	}

	public void setUUID(String id) {
		this.UUID = id;
	}

	public String getSiteVariant() {
		return siteVariant;
	}

	public void setSiteVariant(String siteVariant) {
		this.siteVariant = siteVariant;
	}

}
