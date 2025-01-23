import inventoryPage from '../../../support/pageObjects/inventoryPage'
import loginPage from '../../../support/pageObjects/loginPage'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("Que estou na pagina de login", () => {
    cy.visit('https://www.saucedemo.com/v1/')
})

When("Eu digito um usuário válido", () => {
    loginPage.digitarUsername('standard_user')
})

When('Eu digito o link direto para o inventário na barra de endereço', () => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html')
})

And ('Eu clico em login', () => {
    loginPage.clicarLogin()
})

And('Eu digito uma senha válida', () => {
    loginPage.digitarPassword('secret_sauce')
})

And('Eu digito uma senha inválida', () => {
    loginPage.digitarPassword('senhaInválida')
})

Then("Deve aparecer a página de inventário", () => {
    inventoryPage.existeItemVisivel()
})

Then('Deve aparecer mensagem informando que o username é obrigatório', () => {
    loginPage.verificarMensagemErro('Epic sadface: Username is required')
})

Then('Deve aparecer mensagem informando que a password é obrigatória', () => {
    loginPage.verificarMensagemErro('Epic sadface: Password is required')
})

Then('Deve aparecer mensagem informando que usuário e senha não existem no sistema', () => {
    loginPage.verificarMensagemErro('Epic sadface: Username and password do not match any user in this service')
})

Then('Deve me redirecionar para a pagina de login', () => {
    loginPage.verificarTelaLogin()
})