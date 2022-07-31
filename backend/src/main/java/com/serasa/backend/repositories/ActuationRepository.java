package com.serasa.backend.repositories;

import com.serasa.backend.entities.Actuation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ActuationRepository extends JpaRepository<Actuation,String> {
    Optional<Actuation> findByRegiao(String regiao);
}