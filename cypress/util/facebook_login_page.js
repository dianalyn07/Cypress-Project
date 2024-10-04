//==============Locators===============================

const fb_logo ='img.fb_logo'
const fb_eng_tagline ='h2'
const fb_email='#email'
const fb_password='#pass'
const fb_login_btn ='[data-testid="royal_login_button"]'
const fb_incorrectpass ='div'


//==============Functions===============================

export function Fb_MainLogo(){

    cy.get(fb_logo)

  }

  export function Fb_TagLine(Tagline){

    cy.get(fb_eng_tagline).should("have.text", Tagline)
  }


  export function ValidateLoginFunc(Email,Password,PassMsg){

    cy.get(fb_email).type(Email)
    cy.get(fb_password).type(Password)
    cy.get(fb_login_btn).click()
    cy.get(fb_incorrectpass).contains("have.text", PassMsg)
    //cy.contains("The password that you've entered is incorrect.")
  }