
import { LoginFunction } from "../util/login_page"
import { ValidateProductPrice } from "../util/product_page"

describe('Validate Products and Price', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      LoginFunction('standard_user', 'secret_sauce')
    })
    it('Validate Product Price', () => {
       ValidateProductPrice('Sauce Labs Backpack','$29.99')
       ValidateProductPrice('Sauce Labs Bolt T-Shirt','$15.99')
       ValidateProductPrice('Sauce Labs Onesie','$7.99')
       ValidateProductPrice('Sauce Labs Bike Light','$9.99')
       ValidateProductPrice('Sauce Labs Fleece Jacket','$49.99')
       ValidateProductPrice('Test.allTheThings() T-Shirt (Red)','$15.99')
    })
})