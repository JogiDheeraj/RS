package edu.elearning.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.elearning.model.Image;
import edu.elearning.util.CompositeKey;

public interface ImageRepository  extends MongoRepository<Image, CompositeKey> {

}
