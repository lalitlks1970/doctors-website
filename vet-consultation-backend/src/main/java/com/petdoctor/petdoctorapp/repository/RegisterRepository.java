package com.petdoctor.petdoctorapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.petdoctor.petdoctorapp.model.Register;

public interface RegisterRepository extends JpaRepository<Register, Long> {

    
} 
