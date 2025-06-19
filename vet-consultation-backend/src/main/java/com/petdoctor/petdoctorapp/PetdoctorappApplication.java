package com.petdoctor.petdoctorapp;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class PetdoctorappApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(PetdoctorappApplication.class, args);

        System.out.println("🔍 Beans in context:");
        for (String name : context.getBeanDefinitionNames()) {
            if (name.toLowerCase().contains("usercontroller")) {
                System.out.println("✅ FOUND: " + name);
            }
        }
    }
}
