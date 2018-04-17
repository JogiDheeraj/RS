package edu.elearning.model;

import java.util.Date;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Article {

	@Id
	private String id;

	@NotNull(message = "title_empty")
	private String title;

	@Indexed(unique = true)
	private String seoName;
	
	private Date createDate;
	
	@DBRef
	private User creater;
	
	private Date lastUpdate;
	
	@DBRef
	private User lastUpdater;

	private String location;

	private String simpleText;

	@NotNull(message = "content_empty")
	private String content;

	private String image;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSeoName() {
		return seoName;
	}

	public void setSeoName(String seoName) {
		this.seoName = seoName;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSimpleText() {
		return simpleText;
	}

	public void setSimpleText(String simpleText) {
		this.simpleText = simpleText;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public User getCreater() {
		return creater;
	}

	public void setCreater(User creater) {
		this.creater = creater;
	}

	public User getLastUpdater() {
		return lastUpdater;
	}

	public void setLastUpdater(User lastUpdater) {
		this.lastUpdater = lastUpdater;
	}
	
}
