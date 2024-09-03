package com.example.talent_api;

import com.example.talent_api.User;
import com.example.talent_api.UserRepository;

import java.util.Map;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.net.http.*;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class UserDataService {

    @Autowired
    private UserRepository userRepository;

    private final String API_URL = "https://randomuser.me/api/?results=";

    public void generateRandomUsers(String userType, String amountToGenerate) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(API_URL + amountToGenerate)).build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        ObjectMapper objectMapper = new ObjectMapper();
        Map<String, Object> jsonMap = objectMapper.readValue(response.body(), Map.class);

        List<Map<String, Object>> results = (List<Map<String, Object>>) jsonMap.get("results");

        for (Map<String, Object> userMap : results) {
            Map<String, Object> nameMap = (Map<String, Object>) userMap.get("name");
            String first = (String) nameMap.get("first");
            String last = (String) nameMap.get("last");

            User user = new User();
            user.setUsername(first + last);
            user.setPassword(first + "pass");
            user.setType(userType);

            userRepository.save(user);
        }
    }
}
