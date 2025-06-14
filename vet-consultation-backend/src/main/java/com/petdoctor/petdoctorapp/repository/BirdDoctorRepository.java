package com.petdoctor.petdoctorapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.petdoctor.petdoctorapp.model.BirdDoctor;

@Repository
public interface BirdDoctorRepository extends JpaRepository<BirdDoctor, Long> {
	// BirdDoctorRepository.java
	List<BirdDoctor> findAllByOrderByRatingDesc();

}
