package com.example.talent_api;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;
import java.sql.Time;

@Entity
@Table(name="application")
public class Application {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date_applied;

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

    public Date getDate_applied() {
        return this.date_applied;
    }

    public void setDate_applied(Date date_applied) {
        this.date_applied = date_applied;
    }

    public int getJob_id() {
        return this.job_id;
    }

    public void setJob_id(int job_id) {
        this.job_id = job_id;
    }

    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getCover_letter() {
        return this.cover_letter;
    }

    public void setCover_letter(String cover_letter) {
        this.cover_letter = cover_letter;
    }

    public String getCustom_resume() {
        return this.custom_resume;
    }

    public void setCustom_resume(String custom_resume) {
        this.custom_resume = custom_resume;
    }

    public String getApplication_status() {
        return this.application_status;
    }

    public void setApplication_status(String application_status) {
        this.application_status = application_status;
    }

}
