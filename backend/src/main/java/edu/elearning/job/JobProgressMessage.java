package edu.elearning.job;

import java.util.UUID;

public class JobProgressMessage {

	private UUID jobID;
    private String state;
    private int progress;

    public JobProgressMessage(UUID jobID) {
        this.jobID = jobID;
    }

    public UUID getJobName() {
        return jobID;
    }

    public String getState() {
        return state;
    }

    public int getProgress() {
        return progress;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }
}
