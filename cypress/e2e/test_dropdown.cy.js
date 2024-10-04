describe('Handling of Dropdown using Cypress', () => {

    it('Change Dropdown Value', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('select').select('Highest to lowest')
    })

    it('Validate Already Selected Value in the dropdown', () => {
        cy.visit('https://www.bstackdemo.com/')
        cy.get('select').invoke("val").should("eq","")
    })
})