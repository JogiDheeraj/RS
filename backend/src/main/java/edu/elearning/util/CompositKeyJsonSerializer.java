package edu.elearning.util;

import java.io.IOException;

import org.springframework.boot.jackson.JsonComponent;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

@JsonComponent
public class CompositKeyJsonSerializer extends JsonSerializer<CompositeKey> {

	@Override
	public void serialize(
		CompositeKey key, 
		JsonGenerator jsonGenerator, 
		SerializerProvider serializerProvider
	) throws IOException, JsonProcessingException {
		jsonGenerator.writeStartObject();
		jsonGenerator.writeFieldName("id");
		jsonGenerator.writeString(key.getUuid());
		jsonGenerator.writeEndObject();
	}
}
