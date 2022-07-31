package com.serasa.backend.dto.response;

import com.serasa.backend.entities.Seller;

import java.util.Date;
import java.util.List;

public class GetAllSellerResponseDTO {

    private String nome;
    private String telefone;
    private Integer idade;
    private String cidade;
    private String estado;
    private List<String> estados;

    public GetAllSellerResponseDTO(Seller seller) {
        this.nome = seller.getNome();
        this.telefone = seller.getTelefone();
        this.idade = seller.getIdade();
        this.cidade = seller.getCidade();
        this.estado = seller.getEstado();
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public List<String> getEstados() {
        return estados;
    }

    public void setEstados(List<String> estados) {
        this.estados = estados;
    }
}
