package com.petdoctor.petdoctorapp;

import java.sql.Connection;

import javax.sql.DataSource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PetdoctorappApplication {

	public static void main(String[] args) {
		SpringApplication.run(PetdoctorappApplication.class, args);
	}
    @Bean
    public CommandLineRunner logConnection(DataSource dataSource) {
        return args -> {
            try (Connection conn = dataSource.getConnection()) {
                System.out.println("✅ Connected to DB URL: " + conn.getMetaData().getURL());
                System.out.println("🔌 Driver: " + conn.getMetaData().getDriverName());
            }
        };
}
}
