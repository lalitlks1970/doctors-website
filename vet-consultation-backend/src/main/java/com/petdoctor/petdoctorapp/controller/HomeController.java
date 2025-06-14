package com.petdoctor.petdoctorapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.petdoctor.petdoctorapp.model.BirdDoctor;
import com.petdoctor.petdoctorapp.repository.BirdDoctorRepository;

@Controller
public class HomeController {

	 @Autowired
	private BirdDoctorRepository doctorRepository;
    @GetMapping("/home")
    public String home(Model model) {
    	List<BirdDoctor> topDoctors = doctorRepository.findAllByOrderByRatingDesc();
        model.addAttribute("doctors", topDoctors);
        return "home";  // ye home.html ko dikhayega
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello, public page!";
    }
    
    @GetMapping("/doctor/{id}")
    public String viewDoctorProfile(@PathVariable Long id, Model model) {
        BirdDoctor doctor = doctorRepository.findById(id).orElse(null);
        model.addAttribute("doctor", doctor);
        return "doctorProfile";
    }

}


