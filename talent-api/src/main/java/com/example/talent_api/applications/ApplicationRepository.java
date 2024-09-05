package com.example.talent_api;

import java.util.List;

import com.example.talent_api.Application;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByJobId(Long jobId);
    List<Application> findByUserId(Long userId);
}
