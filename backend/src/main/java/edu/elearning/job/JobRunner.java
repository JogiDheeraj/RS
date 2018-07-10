package edu.elearning.job;

import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.messaging.simp.SimpMessagingTemplate;

public abstract class JobRunner implements Runnable {

	private SimpMessagingTemplate template;
	public AtomicInteger progress = new AtomicInteger();
	public String state = "NEW";
	public UUID jobID;

	public JobRunner(UUID jobID, SimpMessagingTemplate template) {
		this.template = template;
		this.jobID = jobID;
	}

	public void sendProgress() {
		JobProgressMessage temp = new JobProgressMessage(jobID);
		temp.setProgress(progress.get());
		temp.setState(state);
		template.convertAndSend("/simulation/sim-status", temp);
	}

	public int getProgress() {
		return progress.get();
	}

	public String getState() {
		return state;
	}

	public UUID getJobName() {
		return jobID;
	}
}
