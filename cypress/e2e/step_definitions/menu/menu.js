import inventoryPage from '../../../support/pageObjects/inventoryPage'
import loginPage from '../../../support/pageObjects/loginPage'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import menuPage from '../../../support/pageObjects/menuPage'

Given('Que realizei o login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    loginPage.logar('standard_user', 'secret_sauce')    
})

And('estou na pagina de inventário', () => {
    inventoryPage.existeItemVisivel()
})

When('Eu clico no Menu', () => {
    inventoryPage.clicarMenu()
})

And('Eu clico em logout', () => {
    menuPage.clicarLogout()
})

And('Eu clico em about', () => {
    menuPage.clicarAbout()
})

Then('Eu deslogo com sucesso', () => {
    loginPage.verificarTelaLogin()
})

Then('Aparece a pagina de mais informações sobre o sistema', () => {
    aboutPage.verificarTelaAbout()
})