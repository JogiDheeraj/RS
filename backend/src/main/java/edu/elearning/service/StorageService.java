package edu.elearning.service;


import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class StorageService {

	Logger log = LoggerFactory.getLogger(this.getClass().getName());
	private final Path rootLocation = Paths.get(System.getProperty("user.home") + "/directories");

	public void init() {
		try {
			System.out.println("init storage in path " + rootLocation.toAbsolutePath());
			Files.createDirectory(rootLocation);
		} catch (IOException e) {
			throw new RuntimeException("Could not initialize storage!");
		}
	}

	public String store(MultipartFile file) {
		try {
			String name = UUID.randomUUID().toString();
			Files.copy(file.getInputStream(), this.rootLocation.resolve(name));
			return name;
		} catch (Exception e) {
			throw new RuntimeException("FAIL!");
		}
	}

	public File loadFile(String filename) {
		try {
			Path file = rootLocation.resolve(filename);
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource.getFile();
			} else {
				throw new RuntimeException("FAIL!");
			}
		} catch (MalformedURLException e) {
			throw new RuntimeException("FAIL!");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException("FAIL!");
		}
	}

	public void deleteAll() {
		FileSystemUtils.deleteRecursively(rootLocation.toFile());
	}

	public String[] getFileList() {

		File dir = new File(rootLocation.toString());
		String[] files = dir.list();
		
		return files;
	}

}
