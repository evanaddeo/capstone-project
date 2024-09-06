package com.example.talent_api;

import com.example.talent_api.CandidateController;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
// Moved this to the parent CorsConfiguration
// @CrossOrigin(origins="http://34.209.31.30:5173")
@RequestMapping("/candidates")
public class CandidateController {

    @Autowired
    private CandidateRepository candidateRepository;

    @GetMapping
    public List<Candidate> getCandidates() {
        return candidateRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Candidate> getCandidateById(@PathVariable Long id) {
        Optional<Candidate> foundCandidate = candidateRepository.findById(id);

        return foundCandidate.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/byUser/{userId}")
    public ResponseEntity<List<Candidate>> getCandidateByUserId(@PathVariable Long userId) {
        List<Candidate> candidates = candidateRepository.findByUserId(userId);

        return ResponseEntity.ok(candidates);
    }

    @PostMapping
    public ResponseEntity<Candidate> createCandidate(@RequestBody Candidate candidate) {
        Candidate savedCandidate = candidateRepository.save(candidate);
        return new ResponseEntity<>(savedCandidate, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Candidate> updateCandidate(@PathVariable Long id, @RequestBody Candidate candidateDetails) {
        Candidate candidate = candidateRepository.findById(id).orElseThrow(() -> new RuntimeException("Candidate not found by id"));

        candidate.setFull_name(candidateDetails.getFull_name());
        candidate.setEmail(candidateDetails.getEmail());
        candidate.setAddress(candidateDetails.getAddress());
        candidate.setPhone(candidateDetails.getPhone());
        candidate.setResume(candidateDetails.getResume());

        Candidate updatedCandidate = candidateRepository.save(candidate);
        return ResponseEntity.ok(updatedCandidate);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Candidate> deleteCandidate(@PathVariable Long id) {
        Candidate candidate = candidateRepository.findById(id).orElseThrow(() -> new RuntimeException("Candidate not found by id"));

        candidateRepository.delete(candidate);
        return ResponseEntity.noContent().build();
    }
}
