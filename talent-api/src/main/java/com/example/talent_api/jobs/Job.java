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
@Table(name="job")
public class Job {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date_listed;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date_closed;

    private int manager_id;
    private String department;
    private String listing_title;
    private String job_title;
    private String job_description;
    private String additional_information;
    private String listing_status;


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getManager_id() {
        return this.manager_id;
    }

    public void setManager_id(int manager_id) {
        this.manager_id = manager_id;
    }

    public String getDepartment() {
        return this.department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getListing_title() {
        return this.listing_title;
    }

    public void setListing_title(String listing_title) {
        this.listing_title = listing_title;
    }

    public Date getDate_listed() {
        return this.date_listed;
    }

    public void setDate_listed(Date date_listed) {
        this.date_listed = date_listed;
    }

    public Date getDate_closed() {
        return this.date_closed;
    }

    public void setDate_closed(Date date_closed) {
        this.date_closed = date_closed;
    }

    public String getJob_title() {
        return this.job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public String getJob_description() {
        return this.job_description;
    }

    public void setJob_description(String job_description) {
        this.job_description = job_description;
    }

    public String getAdditional_information() {
        return this.additional_information;
    }

    public void setAdditional_information(String additional_information) {
        this.additional_information = additional_information;
    }

    public String getListing_status() {
        return this.listing_status;
    }

    public void setListing_status(String listing_status) {
        this.listing_status = listing_status;
    }

}
