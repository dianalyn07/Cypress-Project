import { LoginFunction,ValidateErrorMessage } from "../util/login_page"




describe('Validate Application Login Functionality', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })
  it('Login Successful', () => {



    //LoginFunction('standard_user', 'secret_sauce')
    cy.login('standard_user', 'secret_sauce')
    cy.get('div.product_label').should("have.text", 'Products')
  })

  it('Invalid Password', () => {

    //LoginFunction('standard_user', 'sqdtest')
    cy.login('standard_user', 'sqdtest')
    ValidateErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })

  it('Locked User', () => {

    //LoginFunction('locked_out_user', 'secret_sauce')
    cy.login('locked_out_user', 'secret_sauce')
    ValidateErrorMessage('Epic sadface: Sorry, this user has been locked out.')
  })
})







