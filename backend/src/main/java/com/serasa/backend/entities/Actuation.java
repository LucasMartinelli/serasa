package com.serasa.backend.entities;

import com.serasa.backend.util.StringListConverter;
import lombok.EqualsAndHashCode;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Table;

@Entity
@Table(name = "atuacao")
@EqualsAndHashCode
public class Actuation implements Serializable {

    @Id
    private String regiao;

    @Convert(converter = StringListConverter.class)
    private List<String> estados;

    public Actuation() {
    }

    public Actuation(String regiao, List<String> estados) {
        this.regiao = regiao;
        this.estados = estados;
    }

    public List<String> getEstados() {
        return estados;
    }

    public void setEstados(List<String> estados) {
        this.estados = estados;
    }

    public String getRegiao() {
        return regiao;
    }

    public void setRegiao(String regiao) {
        this.regiao = regiao;
    }


}
