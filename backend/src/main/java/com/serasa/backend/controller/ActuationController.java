package com.serasa.backend.controller;

import com.serasa.backend.entities.Actuation;
import com.serasa.backend.services.ActuationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/atuacao")
public class ActuationController {

    @Autowired
    private ActuationService service;

    @GetMapping()
    public ResponseEntity<List<Actuation>> getAll() {
        List<Actuation> list = service.getAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Actuation> insert(@RequestBody Actuation actuationRequest) throws URISyntaxException {
        Actuation actuationResponse = service.insert(actuationRequest);
        return ResponseEntity.created(new URI("/atuacao/" + actuationResponse.getRegiao())).body(actuationResponse);
    }
}
