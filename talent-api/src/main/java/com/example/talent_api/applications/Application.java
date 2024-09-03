package com.example.talent_api.applications;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class Application {

    @Id
    private int id;

   // @GeneratedValue(strategy=GenerationType.AUTO)
    //private Time date_applied;

    private int job_id;
    private int user_id;
    private String cover_letter;
    private String custom_resume;
    private String application_status;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    // public Time getDateApplied() {
    //     return this.date_applied;
    // }

    // public void setDateApplied(Time date_applied) {
    //     this.date_applied = date_applied;
    // }

    private int getJobId() {
        return this.job_id;
    }

    private void setJobId(int job_id) {
        this.job_id = job_id;
    }

    private int getUserId() {
        return this.user_id;
    }

    private void setUserId(int user_id) {
        this.user_id = user_id;
    }

    private String getCoverLetter() {
        return this.cover_letter;
    }

    private void setCoverLetter(String cover_letter) {
        this.cover_letter = cover_letter;
    }

    private String getCustomResume() {
        return this.custom_resume;
    }

    private void setCustomResume(String custom_resume) {
        this.custom_resume = custom_resume;
    }

    private String getApplicationStatus() {
        return this.application_status;
    }

    private void setApplicationStatus(String application_status) {
        this.application_status = application_status;
    }
}
