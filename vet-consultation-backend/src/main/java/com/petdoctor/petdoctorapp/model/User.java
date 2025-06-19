package com.petdoctor.petdoctorapp.model;


import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_Name")
    private String fullName;

  
    private String email;

   
    private String phone;


    private String password;

    @Column(name = "user_Type")
    private String userType; // doctor or user

    @Column(name = "created_At")
    private LocalDateTime createdAt = LocalDateTime.now();
    
    @Column(name = "city")
    private String city;
    
    @Column(name = "state")
    private String state;

	public Object getPassword() {
		
		return null;
	}

	public String getEmail() {
		
		return null;
	}

    // Getters and setters
}

