//==============Locators===============================
const fb_logo ='img.fb_logo'
const fb_eng_tagline ='h2'


//==============Functions===============================



export function Fb_MainLogo(){

    cy.get(fb_logo)

  }

  export function Fb_TagLine(Tagline){

    cy.get(fb_eng_tagline).should("have.text", Tagline)
  }
