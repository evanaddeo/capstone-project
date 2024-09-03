package com.example.talent_api;

import com.example.talent_api.ApplicationRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/applications")
public class ApplicationController {
    
    @Autowired
    private ApplicationRepository applicationRepository;

    @GetMapping
    public List<Application> getApplications() {
        return applicationRepository.findAll();
    }
}
