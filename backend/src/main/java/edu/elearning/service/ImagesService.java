package edu.elearning.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.elearning.model.Image;
import edu.elearning.repo.ImageRepository;
import edu.elearning.util.CompositeKey;

@Service
public class ImagesService extends UUIDService {
	
	@Autowired
	private ImageRepository imageRepository;
	
	public Image save(Image img) {
		if (isNew(img)) {
			generateId(img);
		}
		imageRepository.save(img);
		return imageRepository.findOne(img.getIdKey());
	}

	public Object findOne(CompositeKey idKey) {
		return imageRepository.findOne(idKey);
	}

	public long count() {
		return imageRepository.count();
	}

	public void delete(CompositeKey idKey) {
		imageRepository.delete(idKey);
	}

	public List<Image> findAll() {
		return imageRepository.findAll();
	}

}
