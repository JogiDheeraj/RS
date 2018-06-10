package edu.elearning.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import edu.elearning.model.Section;
import edu.elearning.repo.SectionRepository;
import edu.elearning.util.CompositeKey;

@Service
public class SectionService extends UUIDService {

	@Autowired
	private SectionRepository sectionRepository;

	public void save(Section section) {
		if (isNew(section)) {
			generateId(section);
		} else {
			section.setId(this.findOne(section.getIdKey()).getId());
		}
		sectionRepository.save(section);
	}

	public Page<Section> findParentId(CompositeKey parentId, int pageIndex, int pageSize) {
		return sectionRepository.findParentId(parentId, new PageRequest(pageIndex, pageSize));
	}

	public Section findOneBySeoName(String seoName) {
		return sectionRepository.findOneBySeoName(seoName);
	}

	public void delete(CompositeKey id) {
		sectionRepository.delete(id);
	}

	public Section findOne(CompositeKey sectionid) {
		return sectionRepository.findOne(sectionid);
	}

	public int count(CompositeKey parentId) {
		return sectionRepository.count(parentId);
	}

}
