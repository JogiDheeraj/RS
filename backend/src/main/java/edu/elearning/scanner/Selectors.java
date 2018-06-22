package edu.elearning.scanner;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Selectors {
	
	Map<String, String> map = new HashMap<String, String>();
	Map<String, PropertyType> types = new HashMap<String, PropertyType>();
	
	public int getNumLinks() {
		return map.size();
	}
	
	public void addSelector(String proparty, PropertyType type , String selector) {
		map.put(proparty, selector);
		types.put(proparty, type);
	}
	
	public Set<String> getProparties() {
		return map.keySet();
	}
	
	public PropertyType getPropertyType(String proparty) {
		return types.get(proparty);
	}
	
	public String getPropertySelector(String proparty) {
		return map.get(proparty);
	}
	
}
