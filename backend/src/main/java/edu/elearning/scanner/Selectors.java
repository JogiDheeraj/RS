package edu.elearning.scanner;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class Selectors {
	
	Map<String, String> map = new HashMap<String, String>();
	
	Map<String, String> types = new HashMap<String, String>();
	
	public int getNumLinks() {
		return map.size();
	}
	
	protected void addSelector(String propartyName, String type , String selector) {
		map.put(propartyName, selector);
		map.put(propartyName, type);
	}
	
	public Iterator<String> getProparties() {
		return map.keySet().iterator();
	}
	
	public String getPropertyType(String propartyName) {
		return types.get(propartyName);
	}
	
	public String getPropertySelector(String propartyName) {
		return map.get(propartyName);
	}
	
}
