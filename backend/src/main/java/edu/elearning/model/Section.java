package edu.elearning.model;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import edu.elearning.util.CompositeKey;

@Document(collection = "sections")
public class Section extends BaseModel {

	@NotNull(message = "parentId_empty")
	private CompositeKey parentId;

	@NotNull(message = "name_empty")
	private String name;

	@Indexed(unique = true)
	private String seoName;

	@NotNull(message = "name_empty")
	private String description;

	private int articleCount;

	@NotNull(message = "image_empty")
	private String image;

	@NotNull(message = "content_empty")
	private String content;

	@DBRef(lazy = true)
	private List<Article> articles;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSeoName() {
		return seoName;
	}

	public void setSeoName(String seoName) {
		this.seoName = seoName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getArticleCount() {
		return articleCount;
	}

	public void setArticleCount(int articleCount) {
		this.articleCount = articleCount;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public CompositeKey getParentId() {
		return parentId;
	}

	public void setParentId(CompositeKey parentId) {
		this.parentId = parentId;
	}

	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}

}

