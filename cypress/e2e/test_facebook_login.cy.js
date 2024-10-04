import { ValidateLoginFunc} from "../util/facebook_login_page"

describe('Login Validation', () => {


    it('Facebook Invalid_Login', () => {
        cy.page_load()
        ValidateLoginFunc('abc@xyz.com','sqdtest123',"The password that you've entered is incorrect.")

    
    })

})

