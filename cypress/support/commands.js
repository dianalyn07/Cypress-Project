// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (Username,Password)=> {

    const username_field ='#user-name'
    const password_field ='#password'
    const login_btn ='#login-button'

    cy.get(username_field).type(Username)
    cy.get(password_field).type(Password)
    cy.get(login_btn).click()
})

Cypress.Commands.add('page_load', ()=> {

    cy.visit('https://en-gb.facebook.com/')
    //cy.visit('https://www.facebook.com/r.php?locale=en_GB&display=page')
    cy.contains('Return home').click()
})