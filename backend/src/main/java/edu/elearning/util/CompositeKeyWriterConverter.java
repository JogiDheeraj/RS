package edu.elearning.util;

import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.WritingConverter;
import org.springframework.stereotype.Component;

import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;

@Component
@WritingConverter
public class CompositeKeyWriterConverter implements Converter<CompositeKey, DBObject> {

	private static final int FIELDS = 2;

	@Override
	public DBObject convert(CompositeKey source) {
		System.out.println("i am called to write the object id");
		DBObject dbo = new BasicDBObject(FIELDS);
		dbo.put("UUID", source.getUUID());
		dbo.put("siteVariant", source.getSiteVariant());
		return dbo;
	}
}