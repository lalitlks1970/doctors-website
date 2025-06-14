package com.petdoctor.petdoctorapp.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

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
@Table(name = "payments")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne
	@JoinColumn(name = "appointment_id")
	private Appointment appointment;

	@Column(nullable = false)
	private BigDecimal amount;

	private String paymentStatus = "initiated";

	private String paymentGatewayRef;

	private LocalDateTime createdAt = LocalDateTime.now();

	// Getters and setters
}
