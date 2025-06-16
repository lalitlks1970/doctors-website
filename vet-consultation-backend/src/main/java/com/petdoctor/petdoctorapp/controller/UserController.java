package com.petdoctor.petdoctorapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petdoctor.petdoctorapp.model.User;
import com.petdoctor.petdoctorapp.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        // Optionally: hash password before saving (we’ll add this soon)
        return userRepo.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginData) {
        Optional<User> user = userRepo.findByEmail(loginData.getEmail());
        if (user.isPresent() && user.get().getPasswordHash().equals(loginData.getPasswordHash())) {
            return "Login successful"; // Replace with token later
        } else {
            return "Invalid email or password";
        }
    }
}
