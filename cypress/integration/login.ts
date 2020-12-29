/// <reference types="Cypress" />
describe('Create Homework', function() {
    // we can use these values to log in
  const username = 'manasbiswaswins@gmail.com'
  const password = 'Techie@1234'

    beforeEach(() => {
        cy.loginByForm(username,password);
    });

    it('should click header on dashboard', () => {

        cy.get('#settingsPopup')
        .should('exist')
        .should('be.visible')
        .click()

    cy.get('.d-btn-sidebar-collapse')
        .should('exist')
        .should('be.visible')
        .click({ multiple: true })

    cy.get('#appPopup')
        .should('exist')
        .should('be.visible')
        .click({ multiple: true })

    cy.get('#navPopup')
        .should('exist')
        .should('be.visible')
        .click({ multiple: true })
    
    });
    
    });  