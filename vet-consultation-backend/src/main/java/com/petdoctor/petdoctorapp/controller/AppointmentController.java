package com.petdoctor.petdoctorapp.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petdoctor.petdoctorapp.model.Appointment;
import com.petdoctor.petdoctorapp.repository.AppointmentRepository;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepo;

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        return appointmentRepo.save(appointment);
    }
}

