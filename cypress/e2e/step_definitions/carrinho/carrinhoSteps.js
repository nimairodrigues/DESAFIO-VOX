/// <reference types="cypress" />

import carrinhoPage from '../../../support/pageObjects/carrinhoPage';
import inventoryPage from '../../../support/pageObjects/inventoryPage'
import loginPage from '../../../support/pageObjects/loginPage'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import viewItemPage from '../../../support/pageObjects/viewItemPage';

Given('Que realizei o login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    loginPage.logar('standard_user', 'secret_sauce')    
})

And('estou na pagina de inventário', () => {
    inventoryPage.existeItemVisivel()
})

When('Eu clicar no botão "Add to cart" de um item', () => {
    inventoryPage.clicarAddToCartDoCard(2)
})

When('Eu clicar no botão "Add to cart" de 3 itens', () => {
    inventoryPage.clicarAddToCartDoCard(1)
    inventoryPage.clicarAddToCartDoCard(2)
    inventoryPage.clicarAddToCartDoCard(3)
})

When('Eu clicar no item', () => {
    inventoryPage.clicarVisualizarItem(1)
})

And('Eu clicar no ícone de carrinho', () => {
    inventoryPage.clicarCarrinho()
})

And('Eu clicar no botão "Add to cart" do item', () => {
    inventoryPage.clicarAddToCartDoViewItem()
})

And('Eu clicar no botão "Remove" do item', () => {
    inventoryPage.clicarRemoveDoCard(2)
})

And('Eu clicar no botão "Add to cart" da tela de visualização do item', () => {
    viewItemPage.clicarAddToCart()
})

And('Eu clicar no botão "Remove" da tela de visualização do item', () => {
    viewItemPage.clicarRemoveDoCart()
})

And('Eu clicar no botão de "Remove" do item', () => {
    carrinhoPage.clicarRemoverItem()
})

Then('Deve aparecer no ícone de carrinho o número 1', () => {
    inventoryPage.verificarNumDeItemsCarrinho(1)
})

Then('Deve aparecer no ícone de carrinho o número 3', () => {
    inventoryPage.verificarNumDeItemsCarrinho(3)
})

Then('Deve aparecer no ícone de carrinho o número 0', () => {
    inventoryPage.verificarNumDeItensVazioCarrinho()
})

And('Deve aparecer 1 item no carrinho', () => {
    carrinhoPage.verificarQtdDeItemAdd(1)
})

And('Deve aparecer 3 itens no carrinho', () => {
    carrinhoPage.verificarQtdDeItemAdd(3)
})

And('Deve aparecer 0 itens no carrinho', () => {
    carrinhoPage.verificarQtdVaziaDeItemAdd()
})
