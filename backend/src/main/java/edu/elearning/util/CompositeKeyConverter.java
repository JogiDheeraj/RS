package edu.elearning.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class CompositeKeyConverter implements Converter<String, CompositeKey> {
	
	@Autowired
	private HttpServletRequest request;
	
	@Override
	public CompositeKey convert(String source) {
		if (StringUtils.hasText(source)) {
            return new CompositeKey(source.trim(), request.getHeader("Host"));
        } 
		return null;
	}
}
