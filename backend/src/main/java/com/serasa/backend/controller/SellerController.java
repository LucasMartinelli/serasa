package com.serasa.backend.controller;

import com.serasa.backend.dto.response.GetAllSellerResponseDTO;
import com.serasa.backend.dto.response.SellerResponseDTO;
import com.serasa.backend.entities.Actuation;
import com.serasa.backend.entities.Seller;
import com.serasa.backend.services.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/vendedor")
public class SellerController {

    @Autowired
    private SellerService service;

    @GetMapping()
    public ResponseEntity<List<GetAllSellerResponseDTO>> getAll() {
        List<GetAllSellerResponseDTO> list = service.getAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<SellerResponseDTO> getById(@PathVariable Long id) {
        SellerResponseDTO obj = service.getById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Seller> insert(@RequestBody Seller sellerReq) throws URISyntaxException {
        Seller sellerRes = service.insert(sellerReq);
        return ResponseEntity.created(new URI("/vendedor/" + sellerRes.getId())).body(sellerRes);
    }
}
