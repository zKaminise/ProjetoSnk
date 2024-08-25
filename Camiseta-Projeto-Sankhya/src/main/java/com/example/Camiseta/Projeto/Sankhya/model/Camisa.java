package com.example.Camiseta.Projeto.Sankhya.model;

import com.example.Camiseta.Projeto.Sankhya.requestDTO.CamisaRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "camisa")
@Entity(name = "camisa")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")

public class Camisa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String title;
    private String image;
    private Integer price;
    
    @ManyToOne
    @JoinColumn
    private Categoria categoria;

    public Camisa(CamisaRequestDTO data) {
        this.image = data.image();
        this.price = data.price();
        this.title = data.title();
        this.categoria = categoria;
    }

    public Camisa(CamisaRequestDTO data, Categoria categoria) {
    }
}
