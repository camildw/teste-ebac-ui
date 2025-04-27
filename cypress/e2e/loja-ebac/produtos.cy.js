/// <reference types="cypress"/>
//import { faker } from '@faker-js/faker';
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

        it('Deve selecionar um produto da lista', () => {

            produtosPage.buscarProdutoLista('Apollo Running Short')
                //cy.get('.products > .row')
                //.first()
                //.last()
                //.eq(2)
                //.contains('Apollo Running Short')
                //.click()

            
        });

        it('Deve buscar um produto com sucesso', () => {
            let produto = 'Apollo Running Short'
            produtosPage.buscarProduto(produto)
            cy.get('.product_title').should('contain', produto)
        });

        it('Deve visitar a página do produto', () => {
            produtosPage.visitarProduto('Apollo Running Short')
            cy.get('.product_title').should('contain', 'Apollo Running Short')
        });

        it('Deve adicionar produto ao carrinho', () => {
            let qtd = 7
            produtosPage.buscarProduto('Josie Yoga Jacket')
            produtosPage.addProdutoCarrinho('M', 'Blue', qtd)
            cy.get('.woocommerce-message').should('contain', qtd + ' x "Josie Yoga Jacket" foram')
        });

        it.only('Deve adicionar produto ao carrinho - buscando da massa de dados', () => {
            cy.fixture('produtos').then(dados => {
                produtosPage.buscarProduto(dados[1].nomeProduto)
                produtosPage.addProdutoCarrinho(
                    dados[1].tamanho, 
                    dados[1].cor , 
                    dados[1].quantidade)
                cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)    
            })
            });
})