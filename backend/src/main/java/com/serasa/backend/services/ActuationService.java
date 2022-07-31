package com.serasa.backend.services;

import java.util.List;
import java.util.Optional;

import com.serasa.backend.entities.Actuation;
import com.serasa.backend.repositories.ActuationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActuationService {
    @Autowired
    private ActuationRepository repository;

    public List<Actuation> getAll() {
        return repository.findAll();
    }

    public Actuation insert(Actuation actuation) {
        return repository.save(actuation);
    }
}
