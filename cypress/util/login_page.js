//==============Locators===============================
const username_field ='#user-name'
const password_field ='#password'
const login_btn ='#login-button'
const err_msg_elem ='h3'

//==============Functions===============================

export function LoginFunction(Username,Password){

    cy.get(username_field).type(Username)
    cy.get(password_field).type(Password)
    cy.get(login_btn).click()
  }


  export function ValidateErrorMessage(Message){
    cy.get(err_msg_elem).should("have.text", Message)
  }