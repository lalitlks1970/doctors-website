package com.petdoctor.petdoctorapp.model;

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
@Table(name = "register")
public class Register {

        @Id 
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    
        private String email;

        private String password;
}
