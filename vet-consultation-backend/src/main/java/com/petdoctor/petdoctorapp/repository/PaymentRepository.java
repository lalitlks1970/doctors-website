package com.petdoctor.petdoctorapp.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petdoctor.petdoctorapp.model.Appointment;
import com.petdoctor.petdoctorapp.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Optional<Payment> findByAppointment(Appointment appointment);
}
