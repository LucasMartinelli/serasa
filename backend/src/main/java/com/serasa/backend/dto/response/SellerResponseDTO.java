package com.serasa.backend.dto.response;

import com.serasa.backend.entities.Seller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SellerResponseDTO {

    private String nome;

    private Date dataInclusao;

    private List<String> estados;

    public String getNome() {
        return nome;
    }

    public SellerResponseDTO(){}

    public SellerResponseDTO(Seller seller) {
        this.nome = seller.getNome();
        this.dataInclusao = seller.getDataInclusao();
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataInclusao() {
        return dataInclusao;
    }

    public void setDataInclusao(Date dataInclusao) {
        this.dataInclusao = dataInclusao;
    }

    public List<String> getEstados() {
        return estados;
    }

    public void setEstados(List<String> estados) {
        this.estados = estados;
    }

    public void map(Seller seller) {
        setNome(seller.getNome());
        setDataInclusao(seller.getDataInclusao());

    }
}
