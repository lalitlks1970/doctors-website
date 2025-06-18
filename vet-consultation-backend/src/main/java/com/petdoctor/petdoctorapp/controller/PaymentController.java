package com.petdoctor.petdoctorapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petdoctor.petdoctorapp.model.Payment;
import com.petdoctor.petdoctorapp.repository.PaymentRepository;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepo;

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentRepo.findAll();
    }

    @PostMapping
    public Payment makePayment(@RequestBody Payment payment) {
        return paymentRepo.save(payment);
    }
}
