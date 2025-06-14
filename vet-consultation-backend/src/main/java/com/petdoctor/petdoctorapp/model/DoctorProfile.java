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

    private String specialization;
    private String clinicAddress;

    private Double latitude;
    private Double longitude;

    private String consultationType; // online, offline, both

    @Column(nullable = false)
    private BigDecimal fee;

    @Column(columnDefinition = "TEXT")
    private String availability; // JSON string

    private Boolean approved = false;

    // Getters and setters
}

