package edu.elearning.util;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonComponent;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

@JsonComponent
public class CompositKeyJsonDeserializer extends JsonDeserializer<CompositeKey> {

	@Autowired
	private HttpServletRequest request;

	@Override
	public CompositeKey deserialize(
		JsonParser paramJsonParser, 
		DeserializationContext deserializationContext
	) throws IOException, JsonProcessingException {
		JsonNode node = paramJsonParser.getCodec().readTree(paramJsonParser);
		String id = node.get("id").asText();
		return new CompositeKey(id, this.request.getHeader("Host"));
	}
}