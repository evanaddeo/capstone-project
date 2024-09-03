package com.example.talent_api;

import com.example.talent_api.UserRepository;
import com.example.talent_api.UserDataService;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDataService userService;

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/generate")
    public String generateUsers(@RequestParam("type") String userType, @RequestParam("results") String numberToGenerate) throws Exception {
        userService.generateRandomUsers(userType, numberToGenerate);

        return numberToGenerate + " users generated with type " + userType;
    }
}