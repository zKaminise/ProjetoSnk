package com.example.Camiseta.Projeto.Sankhya.controller;

import com.example.Camiseta.Projeto.Sankhya.model.Camisa;
import com.example.Camiseta.Projeto.Sankhya.model.Categoria;
import com.example.Camiseta.Projeto.Sankhya.repository.CamisaRepository;
import com.example.Camiseta.Projeto.Sankhya.repository.CategoriaRepository;
import com.example.Camiseta.Projeto.Sankhya.requestDTO.CamisaRequestDTO;
import com.example.Camiseta.Projeto.Sankhya.responseDTO.CamisaResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("camisa")
public class CamisaController {

    @Autowired
    private CamisaRepository camisaRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping
    public void saveCamisa(@RequestBody CamisaRequestDTO data) {
        if (data.categoria_id() == null) {
            throw new IllegalArgumentException("Categoria ID não pode ser nulo");
        }

        Categoria categoria = categoriaRepository.findById(data.categoria_id())
                .orElseThrow(() -> new RuntimeException("Categoria Não Encontrada"));

        Camisa camisaData = new Camisa(data, categoria);
        camisaRepository.save(camisaData);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<CamisaResponseDTO> getAll() {
        List<CamisaResponseDTO> camisaList = camisaRepository.findAll().stream().map(CamisaResponseDTO::new).toList();
        return camisaList;
    }
}
