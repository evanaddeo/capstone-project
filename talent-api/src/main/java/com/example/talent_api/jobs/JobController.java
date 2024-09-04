package com.example.talent_api;

import com.example.talent_api.JobRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @GetMapping
    public List<Job> getJobs() {
        return jobRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id) {
        Optional<Job> foundJob = jobRepository.findById(id);

        return foundJob.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Job> savedJob(@RequestBody Job job) {
        Job savedJob = jobRepository.save(job);
        return new ResponseEntity<>(savedJob, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable Long id, @RequestBody Job jobDetails) {
        Job job = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found by id"));

        job.setDepartment(jobDetails.getDepartment());
        job.setListing_title(jobDetails.getListing_title());
        job.setDate_listed(jobDetails.getDate_listed());
        job.setDate_closed(jobDetails.getDate_closed());
        job.setJob_title(jobDetails.getJob_title());
        job.setJob_description(jobDetails.getJob_description());
        job.setAdditional_information(jobDetails.getAdditional_information());
        job.setListing_status(jobDetails.getListing_status());

        Job updatedJob = jobRepository.save(job);
        return ResponseEntity.ok(updatedJob);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Job> deleteJob(@PathVariable Long id) {
        Job job = jobRepository.findById(id).orElseThrow(() -> new RuntimeException("Job not found by id"));

        jobRepository.delete(job);
        return ResponseEntity.noContent().build();
    }
}