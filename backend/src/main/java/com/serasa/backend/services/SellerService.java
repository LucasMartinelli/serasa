package com.serasa.backend.services;


import com.serasa.backend.dto.response.GetAllSellerResponseDTO;
import com.serasa.backend.dto.response.SellerResponseDTO;
import com.serasa.backend.entities.Actuation;
import com.serasa.backend.entities.Seller;
import com.serasa.backend.repositories.ActuationRepository;
import com.serasa.backend.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SellerService {

    @Autowired
    private SellerRepository repository;

    @Autowired
    private ActuationRepository actuationRepository;

    public List<GetAllSellerResponseDTO> getAll() {
        List<Seller> allSellers = repository.findAll();
        ArrayList<GetAllSellerResponseDTO> sellerResponseDTOs = new ArrayList<>();
        allSellers.forEach(seller -> {
            GetAllSellerResponseDTO sellerDto = new GetAllSellerResponseDTO(seller);
            Actuation actuation = actuationRepository.findByRegiao(seller.getRegiao()).orElseThrow();
            List<String> estados = actuation.getEstados();
            sellerDto.setEstados(estados);
            sellerResponseDTOs.add(sellerDto);
        });
        return sellerResponseDTOs;
    }

    public SellerResponseDTO getById(Long id) {
        Seller seller = repository.findById(id).orElseThrow();
        SellerResponseDTO sellerDto = new SellerResponseDTO(seller);
        Actuation actuation = actuationRepository.findByRegiao(seller.getRegiao()).orElseThrow();
        List<String> estados = actuation.getEstados();
        sellerDto.setEstados(estados);
        return sellerDto;
    }

    public Seller insert(Seller seller) {
        return repository.save(seller);
    }
}
