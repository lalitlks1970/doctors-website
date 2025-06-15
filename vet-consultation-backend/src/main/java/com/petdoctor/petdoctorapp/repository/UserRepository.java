package com.petdoctor.petdoctorapp.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petdoctor.petdoctorapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByPhone(String phone);
}

