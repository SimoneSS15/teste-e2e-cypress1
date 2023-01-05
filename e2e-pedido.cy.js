/// <refence types="cypress"/>

describe('Teste de ponta a ponta em soucelabs', () => {
    it('Deve fazer o pedido de ponta a ponta', () => {
        cy.visit('https://www.saucedemo.com')

        //Login
        cy.get('[data-test="username"]').type('standard_user') //usuário
        cy.get('[data-test="password"]').type('secret_sauce')// senha
        cy.get('[data-test="login-button"]').click() // botão de login
        cy.get('.peek').should('be.visible')// imagem do robo no canto superior do site
        
        //adicionar produto
        cy.get('#item_4_title_link > .inventory_item_name').click() //seleciona o produto
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()// adiciona no carrinho
        cy.get('[data-test="back-to-products"]').click() //volta pra página produtos
    });
    
});