/// <reference types="Cypress" />

context('Startup', () => {
    beforeEach(() => {
        cy.visit('https://driveshopsdev.app/login');
    });

    it('should fill login form and redirect to dashboard', () => {
    
    // Fill the username
    cy.get('[name="userName"]')
    .type('manasbiswaswins@gmail.com')
    .should('have.value', 'manasbiswaswins@gmail.com');
    
    // Fill the password
    cy.get('[name="password"]')
    .type('Techie@1234')
    .should('have.value', 'Techie@1234');
    
    // check Remember me
    cy.get('[role="checkbox"]').click();

    // Locate and submit the form
    cy.get('[role="button"]').click();
          
    });
    
    });