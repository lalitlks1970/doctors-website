package com.petdoctor.petdoctorapp.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petdoctor.petdoctorapp.model.Appointment;
import com.petdoctor.petdoctorapp.model.User;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByUser(User user);
    
}

