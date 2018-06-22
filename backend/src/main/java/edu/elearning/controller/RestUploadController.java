package edu.elearning.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import edu.elearning.service.StorageService;
import edu.elearning.util.HttpResponceStatus;
import edu.elearning.util.JsonResponseBody;

@RestController
@RequestMapping("/files")
public class RestUploadController {

	@Autowired
	StorageService storageService;

	@GetMapping("")
	public JsonResponseBody getListFiles() {

		JsonResponseBody response = new JsonResponseBody();
		String[] lstFiles;
		try {
			lstFiles = storageService.getFileList();
		} catch (Exception e) {
			throw e;
		}
		response.setStatus(HttpResponceStatus.SUCCESS);
		response.setResult(lstFiles);
		return response;
	}

	@PostMapping("")
	public JsonResponseBody uploadFileMulti(
			@RequestParam("file") MultipartFile file
	) throws Exception {
		JsonResponseBody response = new JsonResponseBody();

		try {
			String name = storageService.store(file);
			response.setStatus(HttpResponceStatus.SUCCESS);
			response.setResult(name);
			response.setMessage("You successfully uploaded - " + file.getOriginalFilename());
		} catch (Exception e) {
			response.setStatus(HttpResponceStatus.FAIL);
			response.setMessage("FAIL! Maybe You had uploaded the file before or the file's size > 500KB");
		}

		return response;
	}

	@GetMapping(value = "/{filename}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
	public @ResponseBody FileSystemResource getFile(
			@PathVariable String filename
	) {
		return new FileSystemResource(storageService.loadFile(filename));
	}
}
