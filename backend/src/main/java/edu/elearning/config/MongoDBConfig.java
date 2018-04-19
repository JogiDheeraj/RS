package edu.elearning.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.convert.CustomConversions;
import org.springframework.data.mongodb.core.convert.DefaultDbRefResolver;
import org.springframework.data.mongodb.core.convert.DefaultMongoTypeMapper;
import org.springframework.data.mongodb.core.convert.MappingMongoConverter;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.core.convert.converter.Converter;


import edu.elearning.util.CompositeKeyReaderConverter;
import edu.elearning.util.CompositeKeyWriterConverter;

@Configuration
@EnableMongoAuditing
@EnableMongoRepositories(basePackages = "edu.elearning.repo")
@EntityScan("edu.elearning.model")
public class MongoDBConfig {
	
	// remove _class
	@Bean
	public MongoTemplate mongoTemplate(
			MongoDbFactory mongoDbFactory, 
			MongoMappingContext context
	) {
		MappingMongoConverter converter = 
				new MappingMongoConverter(new DefaultDbRefResolver(mongoDbFactory), context);
		converter.setTypeMapper(new DefaultMongoTypeMapper(null));
		MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory, converter);
		return mongoTemplate;
	}
	
	@Bean
	public CustomConversions customConversions() {
		List<Converter<?,?>> converters = new ArrayList<Converter<?,?>>();
	    converters.add(new CompositeKeyReaderConverter());
	    converters.add(new CompositeKeyWriterConverter());
	    return new CustomConversions(converters);
	}
	
}
