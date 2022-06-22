/*package com.example.backend.config;

import com.example.backend.model.Suivi;
import com.example.backend.repository.SuiviRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class LoadToDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadToDatabase.class);
    private final Suivi suivi = new Suivi("Titre", "sommeil","stress", "fatigue",  "tristesse");

    @Bean
    CommandLineRunner initDatabase(SuiviRepository suiviRepository) {
        return args -> {
            log.info("Preloading " + suiviRepository.save(suivi));
        };
    }
}
*/