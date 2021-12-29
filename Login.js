describe('Login test', function(){
     beforeEach(function(){

         cy.visit('https://www.saucedemo.com/')

     });

     
     it('Empty Password', function(){

        cy.get('[data-test="username"]').type('standard_user')
    
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Password is required')

    });

    it('Empty Username', function(){

        cy.get('[data-test="password"]').type('secret_sauce')
    
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Username is required')

    });

    

    it('standard user', function(){

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();

        cy.get('.title').should('contain.text', 'Products')

    });

    it('Incorrect Username', function(){

        cy.get('[data-test="username"]').type('wrong one')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')

    });

    it('Incorrect Password', function(){

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('wrong one')
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')

    });

    it('locked_out_user', function(){

        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')

    });


})