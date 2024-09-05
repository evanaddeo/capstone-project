package com.example.talent_api;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

@Entity
@Table(name="candidate")
public class Candidate {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="user_id")
    private int userId;
    private String full_name;
    private String email;
    private String address;
    private String phone;
    private String resume;


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getUser_id() {
        return this.userId;
    }

    public void setUser_id(int userId) {
        this.userId = userId;
    }

    public String getFull_name() {
        return this.full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getResume() {
        return this.resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

}
