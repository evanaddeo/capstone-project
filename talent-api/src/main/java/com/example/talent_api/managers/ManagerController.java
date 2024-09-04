package com.example.talent_api;

import com.example.talent_api.ManagerRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/managers")
public class ManagerController {

    @Autowired
    private ManagerRepository managerRepository;

    @GetMapping
    public List<Manager> getManagers() {
        return managerRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Manager> getManagerById(@PathVariable Long id) {
        Optional<Manager> foundManager = managerRepository.findById(id);

        return foundManager.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Manager> createManager(@RequestBody Manager manager) {
        Manager savedManager = managerRepository.save(manager);
        return new ResponseEntity<>(savedManager, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Manager> updateManager(@PathVariable Long id, @RequestBody Manager managerDetails) {
        Manager manager = managerRepository.findById(id).orElseThrow(() -> new RuntimeException("Manager not found by id"));

        manager.setFull_name(managerDetails.getFull_name());
        manager.setEmail(managerDetails.getEmail());
        manager.setDepartment(managerDetails.getDepartment());
        manager.setPhone(managerDetails.getPhone());

        Manager updatedManager = managerRepository.save(manager);
        return ResponseEntity.ok(updatedManager);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Manager> deleteManager(@PathVariable Long id) {
        Manager manager = managerRepository.findById(id).orElseThrow(() -> new RuntimeException("Manager not found by id"));

        managerRepository.delete(manager);
        return ResponseEntity.noContent().build();
    }
}
