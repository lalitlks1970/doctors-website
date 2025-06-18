package com.petdoctor.petdoctorapp.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petdoctor.petdoctorapp.model.DoctorProfile;
import com.petdoctor.petdoctorapp.repository.DoctorProfileRepository;

@RestController
@RequestMapping("/api/doctors")
public class DoctorProfileController {

    @Autowired
    private DoctorProfileRepository doctorRepo;

    @GetMapping
    public List<DoctorProfile> getAllDoctors() {
        return doctorRepo.findAll();
    }

    @PostMapping
    public DoctorProfile createDoctor(@RequestBody DoctorProfile doctor) {
        return doctorRepo.save(doctor);
    }
}

