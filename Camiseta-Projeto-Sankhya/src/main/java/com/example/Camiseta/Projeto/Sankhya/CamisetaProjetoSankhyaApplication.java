package com.example.Camiseta.Projeto.Sankhya;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class CamisetaProjetoSankhyaApplication extends SpringBootServletInitializer {

	public CamisetaProjetoSankhyaApplication() {
		super();
		setRegisterErrorPageFilter(false);
	}

	public static void main(String[] args) {
		SpringApplication.run(CamisetaProjetoSankhyaApplication.class, args);
	}

}
