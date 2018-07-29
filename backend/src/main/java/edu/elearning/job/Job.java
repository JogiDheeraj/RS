package edu.elearning.job;

import java.util.Date;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class Job implements Runnable {
	
	@JsonIgnore
	private SimpMessagingTemplate template;
	
	protected AtomicInteger progress = new AtomicInteger();
	protected JobStatus state = JobStatus.NEW;
	protected Date created = new Date();
	protected Date started;
	protected Date ended;
	protected UUID jobID;
	protected String message = null;
	
	@JsonIgnore
	protected boolean interrupted = false;

	public Job(UUID jobID, SimpMessagingTemplate template) {
		this.template = template;
		this.jobID = jobID;
	}
	
	public void interrupt() {
		interrupted = true;
		this.state = JobStatus.INTERRUPTED;
		this.sendProgress();
	}
	
	public void resum() {
		interrupted = false;
		this.state = JobStatus.RUNNING;
		this.sendProgress();
	}
	
	public void sendProgress() {
		JobProgressMessage temp = new JobProgressMessage(jobID);
		temp.setProgress(this.progress.get());
		temp.setState(this.state);
		temp.setCreated(this.created);
		temp.setEnded(this.ended);
		temp.setStarted(this.started);
		temp.setMessage(this.message);
		template.convertAndSend("/task/task-state", temp);
	}

	public int getProgress() {
		return progress.get();
	}

	public JobStatus getState() {
		return state;
	}

	public UUID getJobName() {
		return jobID;
	}

	public Date getCreated() {
		return created;
	}

	public Date getStarted() {
		return started;
	}

	public Date getEnded() {
		return ended;
	}

	public UUID getJobID() {
		return jobID;
	}
	
}
