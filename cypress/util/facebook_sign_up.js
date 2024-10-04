//==============Locators===============================
const fb_signup ='div'
const fb_create_acct ='[data-testid="open-registration-form-button"]'
const fb_fName ='[name="firstname"]'
const fb_lName ='[name="lastname"]'
const fb_birth_day ='[name="birthday_day"]'
const fb_birth_month ='[name="birthday_month"]'
const fb_birth_year ='[name="birthday_year"]'
const fb_gender_female ='input[value="1"]'
const fb_gender_male ='input[value="2"]'
const fb_gender_custom ='input[value="-1"]'
const fb_mobile_email ='[name="reg_email__"]'
const fb_password ='[name="reg_passwd__"]'

//==============Functions===============================

export function Fill_Up(SignUp_Tagline){
    
    cy.get(fb_create_acct).click()
    cy.get(fb_signup).contains("have.text", SignUp_Tagline)
    cy.get(fb_fName).type(FName)
    cy.get(fb_lName).type(LName)
    cy.get(fb_birth_day).select(B_day)
    cy.get(fb_birth_month).select(B_month)
    cy.get(fb_birth_year).select(B_year)


}
