package edu.elearning.util;

import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.stereotype.Component;

import com.mongodb.DBObject;

@Component
@ReadingConverter
public class CompositeKeyReaderConverter implements Converter<DBObject, CompositeKey> {
	
	@Override
	public CompositeKey convert(DBObject source) {
		System.out.println("i am called to read the object id");
		String id = (String) source.get("UUID");
		String siteVariant = (String) source.get("siteVariant");
		CompositeKey compositeId = new CompositeKey(id, siteVariant);
		return compositeId;
	}
}
