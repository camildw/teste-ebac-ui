/// <reference types="cypress"/>

describe('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('camila.teste@teste.com')
        cy.get('#password').type('Zz453tTrDCcHWsK')
        cy.get('.woocommerce-form > .button').click()
   
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, camila.teste (não é camila.teste? Sair)')
    })


})