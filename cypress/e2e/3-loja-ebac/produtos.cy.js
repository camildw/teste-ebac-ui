/// <reference types="cypress"/>
//import { faker } from '@faker-js/faker';

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

        it('Deve selecionar um produto da lista', () => {

            cy.get('.products > .row')
                //.first()
                //.last()
                //.eq(2)
                .contains('Apollo Running Short')
                .click()

            
        });



})