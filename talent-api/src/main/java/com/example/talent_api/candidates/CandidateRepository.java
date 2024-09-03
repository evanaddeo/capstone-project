package com.example.talent_api;

import com.example.talent_api.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, Long>{
}
