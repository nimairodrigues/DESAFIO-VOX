import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the login page", () => {
    cy.visit('https://www.saucedemo.com/v1/')
})

When("I type a registered email and password", () => {
    cy.get('[data-test=username').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
})

Then("I have a successful login", () => {
    cy.get('div[class=inventory_item]').should('be.visible')
})