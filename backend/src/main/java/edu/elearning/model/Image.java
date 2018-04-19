package edu.elearning.model;

import javax.validation.constraints.NotNull;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="images")
public class Image extends BaseModel{
	
	@NotNull(message = "title_empty")
	private String title;
	
	@NotNull(message = "url_empty")
	private String url;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
}
