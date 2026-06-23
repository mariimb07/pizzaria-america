package com.itb.inf2em.pizzarianapoli.controller;

import java.util.list;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.itb.inf2em.pizzarianapoli.model.services.ProdutoService;

@RestController
@RequestMapping("/api/v1/produtos")
public class ProdutoController {

    // Ligação com o service

    private ProdutoService produtoService = new ProdutoService();


    // Listando todos os produtos

    @GetMapping
    public List<Produto> findAll() {
        return produtoService.listarTodos();
    }

    // Buscar produto pelo Id

    @GetMapping("/{id}")
    public Produto findById(@PathVariable Long id) {
        return produtoService.buscarPorId(id);
    }


}
