describe('Cart test', function(){

    beforeEach(function(){

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();

    });

    it('Add item to the cart', function(){

        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('span.shopping_cart_badge').should('contain.text', '1')
        

    });

    it('Remove item of the cart', function(){

        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#remove-sauce-labs-backpack').click();
        //cy.get('span.shopping_cart_badge').should('contain.text', '0')
        cy.get('.shopping_cart_link').should('contain.text', '')

    })

})