package com.example.talent_api;

import com.example.talent_api.ApplicationRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/applications")
public class ApplicationController {
    
    @Autowired
    private ApplicationRepository applicationRepository;

    @GetMapping
    public List<Application> getApplications() {
        return applicationRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable Long id) {
        Optional<Application> foundApplication = applicationRepository.findById(id);

        return foundApplication.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/byJob/{jobId}")
    public ResponseEntity<List<Application>> getApplicationByJobId(@PathVariable Long jobId) {
        List<Application> applications = applicationRepository.findByJobId(jobId);

        return ResponseEntity.ok(applications);
    }

    @PostMapping
    public ResponseEntity<Application> createApplication(@RequestBody Application application) {
        Application savedApplication = applicationRepository.save(application);
        return new ResponseEntity<>(savedApplication, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Application> updateApplication(@PathVariable Long id, @RequestBody Application applicationDetails) {
        Application application = applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Application not found by id"));

        application.setDate_applied(applicationDetails.getDate_applied());
        application.setCover_letter(applicationDetails.getCover_letter());
        application.setCustom_resume(applicationDetails.getCustom_resume());
        application.setApplication_status(applicationDetails.getApplication_status());

        Application updatedApplication = applicationRepository.save(application);
        return ResponseEntity.ok(updatedApplication);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Application> deleteApplication(@PathVariable Long id) {
        Application application = applicationRepository.findById(id).orElseThrow(() -> new RuntimeException("Application not found by id"));

        applicationRepository.delete(application);
        return ResponseEntity.noContent().build();
    }
}
