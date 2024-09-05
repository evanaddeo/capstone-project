package com.example.talent_api;

import java.util.List;

import com.example.talent_api.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, Long>{
    List<Candidate> findByUserId(Long userId);
}
