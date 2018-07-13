package edu.elearning.job;

import java.util.Date;
import java.util.UUID;

/*
 * this class is used for conversation messages over Sockets
 */
public class JobProgressMessage {

	private UUID jobID;
    private JobStatus state;
    private int progress;
    private Date created;
    private Date started;
    private Date ended;
    private String message;

    public JobProgressMessage(UUID jobID) {
        this.jobID = jobID;
    }

    public UUID getJobName() {
        return jobID;
    }

    public JobStatus getState() {
        return state;
    }

    public int getProgress() {
        return progress;
    }

    public void setState(JobStatus state) {
        this.state = state;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }

	public UUID getJobID() {
		return jobID;
	}

	public void setJobID(UUID jobID) {
		this.jobID = jobID;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getStarted() {
		return started;
	}

	public void setStarted(Date started) {
		this.started = started;
	}

	public Date getEnded() {
		return ended;
	}

	public void setEnded(Date ended) {
		this.ended = ended;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
    
}
