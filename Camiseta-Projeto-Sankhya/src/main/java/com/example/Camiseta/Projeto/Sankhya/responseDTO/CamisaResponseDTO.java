package com.example.Camiseta.Projeto.Sankhya.responseDTO;

import com.example.Camiseta.Projeto.Sankhya.Camisa;

public record CamisaResponseDTO(Long id, String title, String image, Integer price) {
    public CamisaResponseDTO(Camisa camisa) {this(camisa.getId(), camisa.getTitle(), camisa.getImage(), camisa.getPrice());}
}
