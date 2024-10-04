import { Fill_Up} from "../util/facebook_sign_up"

describe('Sign Up fill', () => {


    it('Filled Sign Up', () => {
        cy.page_load()
        Fill_Up('Create a new account')
    
    })

})