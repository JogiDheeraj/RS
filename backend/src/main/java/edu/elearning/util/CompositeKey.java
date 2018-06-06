package edu.elearning.util;

import java.io.Serializable;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("app")
@CompoundIndex(def = "{'UUID':1, 'siteVariant':1}", name = "compound_index")
public class CompositeKey implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String uuid;
	
	private String siteVariant;

	public CompositeKey(String uuid, String siteVariant) {
		this.uuid = uuid;
		this.siteVariant = siteVariant;
	}
	
	@SuppressWarnings("unused")
	private CompositeKey() { }

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String id) {
		this.uuid = id;
	}

	public String getSiteVariant() {
		return siteVariant;
	}

	public void setSiteVariant(String siteVariant) {
		this.siteVariant = siteVariant;
	}
	
	@Override
	public String toString() {
		return this.siteVariant + "/" + this.uuid;
	}
}
