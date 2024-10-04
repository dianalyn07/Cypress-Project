import { Fb_MainLogo, Fb_TagLine } from "../util/facebook_home_ui"

describe('Facebook Logo', () => {

    //beforeEach(() => {
        //cy.visit('https://en-gb.facebook.com/')
        //cy.contains('Return home').click()
    //})

    it('Facebook Logo Presence', () => {
        cy.page_load()
        Fb_MainLogo()

    
    })

    it('Facebook Tagline', () => {
        cy.page_load()
        Fb_TagLine('Facebook helps you connect and share with the people in your life.')
    
    })

})

