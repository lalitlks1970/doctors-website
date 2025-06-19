package com.petdoctor.petdoctorapp.controller;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petdoctor.petdoctorapp.model.Register;
import com.petdoctor.petdoctorapp.model.User;
import com.petdoctor.petdoctorapp.repository.RegisterRepository;
import com.petdoctor.petdoctorapp.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private RegisterRepository RegisterRepo;

    @Autowired
    private UserRepository userRepo;

    
    @PostMapping("/register")
    public ResponseEntity<Register> register(@RequestBody Register user) {
       logger.info("🔐 Registering new user with email: {}", user.getEmail());
        System.out.println(user.getEmail());
        // TODO: hash password before saving
        Register savedUser = RegisterRepo.save(user);

        logger.info("✅ User registered successfully with ID: {}", savedUser.getId());
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginData) {
        Optional<User> user = userRepo.findByEmail(loginData.getEmail());
        if ( user.get().getPassword().equals(loginData.getPassword())) {
            return "Login successful"; // Replace with token later
        } else {
            return "Invalid email or password";
        }
    }
}
