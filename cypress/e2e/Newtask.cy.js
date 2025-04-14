import testdata from"../fixtures/newdata.json"


// Register User
describe('Test Suite', () => {
    it.only('Register User', () => {
cy.visit('http://automationexercise.com') //
cy.get('.shop-menu > .nav > :nth-child(1)').contains('Home')
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
cy.get('.signup-form > h2').contains('New User Signup!')
cy.get('[data-qa="signup-name"]').type(testdata.name)
cy.get('[data-qa="signup-email"]').type(testdata.email)
cy.get('[data-qa="signup-button"]').click()
cy.contains('Enter Account Information').should('be.visible')
cy.get(':nth-child(4) > .top').click()
cy.get('[data-qa="password"]').type(testdata.password)
cy.get('[data-qa="days"]').select('23')
cy.get('[data-qa="months"]').select('April')
cy.get('[data-qa="years"]').select('1997')
cy.get('#newsletter').click()
cy.get('#optin').click()
cy.get('[data-qa="first_name"]').type(testdata.Firstname)
cy.get('[data-qa="last_name"]').type(testdata.Lastname)
cy.get('[data-qa="company"]').type(testdata.Company)
cy.get('[data-qa="address"]').type(testdata.Address1)
cy.get('[data-qa="address2"]').type(testdata.Address2)
cy.get('[data-qa="country"]').select('United States')
cy.get('[data-qa="state"]').type(testdata.State)
cy.get('[data-qa="city"]').type(testdata.City)
cy.get('[data-qa="zipcode"]').type(testdata.Zipcode)
cy.get('[data-qa="mobile_number"]').type(testdata.Mobile)
cy.get('[data-qa="create-account"]').click()
cy.contains('Account Created').should('be.visible')
cy.get('[data-qa="continue-button"]').click()
cy.contains('Logged in as').should('be.visible')

    })
  

//Login User with correct email and password
   it.only('Login with Correct email and password', () => {
   cy.visit('http://automationexercise.com')
    cy.contains('Home').should('be.visible')
    cy.login(testdata.email, testdata.password)
    cy.contains('Logged in as').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.contains('Account Deleted!').should('be.visible')

 })



 //Login User with incorrect email and password
 it.only('Login with incorrect email and password', () => {
    cy.visit('http://automationexercise.com')
    cy.contains('Home').should('be.visible')
    cy.login(testdata.IncorrectEmail, testdata.IncorrectPassword)
    cy.contains('Your email or password is incorrect!').should('be.visible')
 })

})
