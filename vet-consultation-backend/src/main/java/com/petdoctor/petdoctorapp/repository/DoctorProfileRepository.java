package com.petdoctor.petdoctorapp.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petdoctor.petdoctorapp.model.DoctorProfile;
import com.petdoctor.petdoctorapp.model.User;

public interface DoctorProfileRepository extends JpaRepository<DoctorProfile, Long> {
    Optional<DoctorProfile> findByUser(User user);
    List<DoctorProfile> findBySpecializationContainingIgnoreCase(String specialization);
    List<DoctorProfile> findByApprovedTrue();
}
