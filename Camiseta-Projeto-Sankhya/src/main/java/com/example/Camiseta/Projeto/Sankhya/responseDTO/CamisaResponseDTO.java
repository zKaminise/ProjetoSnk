package com.example.Camiseta.Projeto.Sankhya.responseDTO;

import com.example.Camiseta.Projeto.Sankhya.model.Camisa;

public class CamisaResponseDTO {
    private Long id;
    private String title;
    private String image;
    private Integer price;
    private Long categoria_id;

    public CamisaResponseDTO(Camisa camisa) {
        this.id = camisa.getId();
        this.title = camisa.getTitle();
        this.image = camisa.getImage();
        this.price = camisa.getPrice();
        this.categoria_id = camisa.getCategoria() != null ? camisa.getCategoria().getId() : null;
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

    public Long getCategoria_id() {
        return categoria_id;
    }

    public void setCategoria_id(Long categoria_id) {
        this.categoria_id = categoria_id;
    }
}
