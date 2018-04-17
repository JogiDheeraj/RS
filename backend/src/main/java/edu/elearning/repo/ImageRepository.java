package edu.elearning.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.elearning.model.Image;

public interface ImageRepository  extends MongoRepository<Image, String> {

}
