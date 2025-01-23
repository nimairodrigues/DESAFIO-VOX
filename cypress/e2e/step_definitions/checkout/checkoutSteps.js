import inventoryPage from '../../../support/pageObjects/inventoryPage'
import loginPage from '../../../support/pageObjects/loginPage'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import carrinhoPage from '../../../support/pageObjects/carrinhoPage'
import checkoutPage from '../../../support/pageObjects/checkoutPage'

Given('Que realizei o login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    loginPage.logar('standard_user', 'secret_sauce')    
})

And('Tenho um ítem adicionado no carrinho', () => {
    inventoryPage.clicarAddToCartDoCard(2)
})

And('Estou na pagina do carrinho', () => {
    inventoryPage.clicarCarrinho()
})

When('Eu clicar em Checkout', () => {
    carrinhoPage.clicarCheckout()
})

And('Preencher em First Name {string}', (firstName) => {
    checkoutPage.digitarFirstName(firstName)
})

And('Preencher em Last Name {string}', (lastName) => {
    checkoutPage.digitarLastName(lastName)
})

And('Preencher em Postal Code {string}', (postalCode) => {
    checkoutPage.digitarPostalCode(postalCode)
})

And('Clicar no botão Continue', () => {
    checkoutPage.clicarContinue()
})

And('Clicar no botão Finish', () => {
    checkoutPage.clicarFinish()
})

And('Clicar no nome do item para visualiza-lo', () => {
    checkoutPage.clicarVisualizarItem()
})

And('Clicar no botão de Remove', () => {
    inventoryPage.clicarRemoveDoViewItem()
})

And('Clicar no botão Cancel', () => {
    checkoutPage.clicarCancel()
})

Then('Deve aparecer que o pedido foi enviado com sucesso', () => {
    checkoutPage.verificarMensagemSuccessfullOrder()
})

Then('Clicar no botão de Back', () => {
    inventoryPage.clicarBackDoViewItem()
})

Then('Deve aparecer que o campo First Name é obrigatório', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: First Name is required")
})

Then('Deve aparecer que o campo Last Name é obrigatório', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Last Name is required")
})

Then('Deve aparecer que o campo Postal Code é obrigatório', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Postal Code is required")
})

Then('Deve aparecer que preciso ter itens no carrinho', () => {
    checkoutPage.verificarMensagemItemCarrinhoObrigatorio()
})

Then('O item deve ser removido da lista de itens do overview', () => {
    checkoutPage.verificarQtdVaziaDeItemAddOverview()
})

Then('Deve voltar para página de inventário', () => {
    inventoryPage.existeItemVisivel()
})

Then('Deve informar que o campo First Name atingiu o limite máximo', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: First Name has reached the maximum character limit.")
})

Then('Deve válidar e passar para a tela de overview', () => {
    checkoutPage.verificarPaginaCheckout()
})

Then('Deve informar que o campo First Name está inválido', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: First Name is invalid.")
})

Then('Deve informar que o campo First Name não tingiu o limite mínimo de caracteres', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: First Name has not reached the minimum character limit.")
})

Then('Deve informar que o campo Last Name atingiu o limite máximo de caracteres', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Last Name has reached the maximum character limit.")
})

Then('Deve informar que o campo Last Name está inválido', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Last Name is invalid.")
})

Then('Deve informar que o campo Last Name não tingiu o limite mínimo de caracteres', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Last Name has not reached the minimum character limit.")
})

Then('Deve informar que o campo Postal Code atingiu o limite máximo de caracteres', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Postal Code has reached the maximum character limit.")
})

Then('Deve informar que o campo Postal Code não tingiu o limite mínimo de caracteres', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Postal Code has not reached the minimum character limit.")
})

Then('Deve informar que o campo Postal Code está inválido', () => {
    checkoutPage.verificarMensagemErrorCheckoutForm("Error: Postal Code is invalid.")
})