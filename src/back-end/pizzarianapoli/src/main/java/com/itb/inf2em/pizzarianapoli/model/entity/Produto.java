package com.itb.inf2em.pizzarianapoli.model.entity;

import java.math.BigDecimal;

public class Produto {

    private Long id;
    private Long nome;
    private String descricao;
    private BigDecimal valorCompra;
    private BigDecimal valorVenda;
    public BigDecimal getValorCompra() {
        return valorCompra;
    }

    public void setValorCompra(BigDecimal valorCompra) {
        this.valorCompra = valorCompra;
    }

    public BigDecimal getValorVenda() {
        return valorVenda;
    }

    public void setValorVenda(BigDecimal valorVenda) {
        this.valorVenda = valorVenda;
    }

    public int getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    public void setQuantidadeEstoque(int quantidadeEstoque) {
        this.quantidadeEstoque = quantidadeEstoque;
    }

    public boolean isCodStatus() {
        return codStatus;
    }

    public void setCodStatus(boolean codStatus) {
        this.codStatus = codStatus;
    }

    private int quantidadeEstoque;
    private boolean codStatus;

    // Setter's | Getter's

    public void setId(Long id) {
        this.id = id;
    }

     public Long getId() {
        return id;
    }

     public void setNome(Long nome) {
        this.nome = nome;
    }

     public Long getNome() {
        return nome;
    }

     public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

     public String getDescricao() {
        return descricao;
    }


}
