package edu.elearning.util;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jackson.JsonComponent;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

@JsonComponent
public class CompositKeyCombinedSerializer {

	public static class CompositKeyJsonSerializer extends JsonSerializer<CompositeKey> {

		@Override
		public void serialize(
				CompositeKey key, 
				JsonGenerator jsonGenerator, 
				SerializerProvider serializerProvider
		) {
			try {
				jsonGenerator.writeStartObject();
				jsonGenerator.writeFieldName("id");
				jsonGenerator.writeString(key.getUuid());
				jsonGenerator.writeEndObject();
			} catch (Exception e) {
				e.printStackTrace();
			} 
		}
	}

	public static class CompositKeyJsonDeserializer extends JsonDeserializer<CompositeKey> {

		@Autowired
		private HttpServletRequest request;

		@Override
		public CompositeKey deserialize(
				JsonParser paramJsonParser, 
				DeserializationContext deserializationContext
		) throws JsonProcessingException, IOException {
			String str = paramJsonParser.getText().trim();
			System.out.println("try to create id from string : " + str);
			System.out.println("try to create id from Host : " + this.request.getHeader("Host"));
			return new CompositeKey(str, this.request.getHeader("Host"));
		}
	}

}
