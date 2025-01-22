import inventoryPage from '../../../support/pageObjects/inventoryPage'
import loginPage from '../../../support/pageObjects/loginPage'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Que realizei o login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    loginPage.logar('standard_user', 'secret_sauce')    
})

And('estou na pagina de inventário', () => {
    inventoryPage.existeItemVisivel()
})

When('Eu clico no ícone de Twitter/X', () => {
    inventoryPage.clicarSocialTwitter()
})

When('Eu clico no ícone de Facebook', () => {
    inventoryPage.clicarSocialFacebook()
})

When('Eu clico no ícone de LinkedIn', () => {
    inventoryPage.clicarSocialLinkedin()
})

Then('Devo ser redirecionado para o Twitter/X do sistema', () => {
    inventoryPage.verificarTelaTwitter()
})

Then('Devo ser redirecionado para o Facebook do sistema', () => {
    inventoryPage.verificarTelaFacebook()
})

Then('Devo ser redirecionado para o LinkedIn do sistema', () => {
    inventoryPage.verificarTelaLinkedin()
})