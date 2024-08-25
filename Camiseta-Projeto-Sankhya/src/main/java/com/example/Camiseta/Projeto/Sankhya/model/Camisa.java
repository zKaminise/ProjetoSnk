package com.example.Camiseta.Projeto.Sankhya.model;

import com.example.Camiseta.Projeto.Sankhya.requestDTO.CamisaRequestDTO;
import jakarta.persistence.*;

@Entity
public class Camisa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String image;
    private Integer price;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    public Camisa() {}

    // Construtor que aceita CamisaRequestDTO e Categoria
    public Camisa(CamisaRequestDTO data, Categoria categoria) {
        this.title = data.title();
        this.image = data.image();
        this.price = data.price();
        this.categoria = categoria;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
