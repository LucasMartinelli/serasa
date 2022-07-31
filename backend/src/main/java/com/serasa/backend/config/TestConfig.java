package com.serasa.backend.config;

import com.serasa.backend.entities.Actuation;
import com.serasa.backend.repositories.ActuationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.Arrays;

@Configuration
public class TestConfig implements CommandLineRunner {

    @Autowired
    private ActuationRepository actuationRepository;

    @Override
    public void run(String... args) throws Exception {
        Actuation atc1 = new Actuation("Sudeste", Arrays.asList("SP", "RJ"));
        Actuation atc2 = new Actuation("Nordeste", Arrays.asList("BA", "PE"));

        this.actuationRepository.saveAll(Arrays.asList(atc1, atc2));
    }
}
