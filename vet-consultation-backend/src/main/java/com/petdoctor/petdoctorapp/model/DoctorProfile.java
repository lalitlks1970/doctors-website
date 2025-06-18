package com.petdoctor.petdoctorapp.model;


import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Entity
@Table(name = "doctor_profiles")
public class DoctorProfile {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String name;
    
    private String email;
    
    private String speciality;
    
    private String qualification;
    
    private String phone;
    
    private String specialization;
    
    @Column(name = "clinic_Address", nullable = false)
    private String clinicAddress;

    private Double latitude;
    
    private Double longitude;
    
    private String city;
    
    private String state;

    @Column(name = "consultation_Type", nullable = false)
    private String consultationType; // online, offline, both

    @Column(nullable = false)
    private BigDecimal fee;

    @Column(columnDefinition = "TEXT")
    private String availability; // JSON string
    
    @Column(name = "online_Available", nullable = false)
    private boolean onlineAvailable;
    
    @Column(name = "offline_Available", nullable = false)
    private boolean offlineAvailable;

    @Column(name = "consultation_Fee", nullable = false)
    private double consultationFee;

    private Boolean approved = false;

    // Getters and setters
}

