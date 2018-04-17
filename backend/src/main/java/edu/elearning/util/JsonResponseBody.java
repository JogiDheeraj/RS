package edu.elearning.util;

public class JsonResponseBody {

	private String errorMessage;
	private String status = null;
	private Object result = null;

	public JsonResponseBody(){
		
	}
	
	public JsonResponseBody(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}
	
	public Object getResult() {
		return result;
	}

	public void setResult(Object result) {
		this.result = result;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
