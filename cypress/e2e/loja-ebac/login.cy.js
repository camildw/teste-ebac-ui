/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
            });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('camila.teste@teste.com')
        cy.get('#password').type('Zz453tTrDCcHWsK')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, camila.teste')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('joao.teste@teste.com')
        cy.get('#password').type('Zz453tTrDCcHWsK')
        cy.get('.woocommerce-form > .button').click()
       //cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
       cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('camila.teste@teste.com')
        cy.get('#password').type('123@camila')
        cy.get('.woocommerce-form > .button').click()
       //cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail')
       cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, camila.teste')
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, camila.teste')    
        })
        });

    it('Deve fazer login com sucesso - Usando comando customizado', () => {
            cy.login('camila.teste@teste.com' , 'Zz453tTrDCcHWsK') 
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, camila.teste')
    });

})