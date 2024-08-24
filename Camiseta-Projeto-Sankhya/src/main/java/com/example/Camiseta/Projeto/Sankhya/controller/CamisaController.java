package com.example.Camiseta.Projeto.Sankhya.controller;

import com.example.Camiseta.Projeto.Sankhya.Camisa;
import com.example.Camiseta.Projeto.Sankhya.repository.CamisaRepository;
import com.example.Camiseta.Projeto.Sankhya.requestDTO.CamisaRequestDTO;
import com.example.Camiseta.Projeto.Sankhya.responseDTO.CamisaResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("camisa")
public class CamisaController {

    @Autowired
    private CamisaRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveCamisa(@RequestBody CamisaRequestDTO data) {
        Camisa camisaData = new Camisa(data);
        repository.save(camisaData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<CamisaResponseDTO> getAll() {
        List<CamisaResponseDTO> camisaList = repository.findAll().stream().map(CamisaResponseDTO::new).toList();
        return camisaList;
    }
}
