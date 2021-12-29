

describe('Cart test', function(){

    beforeEach(function(){

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();

    });

    it('Check out', function(){

        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click();
        cy.get('#first-name').type('valid name');
        cy.get('#last-name').type('valid last name');
        cy.get('#postal-code').type('valid postal code');
        cy.get('#continue').click();
        cy.get('#finish').click();
        cy.get('span.title').should('contain.text' , 'Checkout: Complete!')
        




        

    });

  

})