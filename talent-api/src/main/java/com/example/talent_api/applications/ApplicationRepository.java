package com.example.talent_api;

import com.example.talent_api.Application;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ApplicationRepository extends JpaRepository<Application, Long> {
}
