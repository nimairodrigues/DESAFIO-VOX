//Aqui ajuda na codificação dos testes em cypress na escrita, pois mostra sugestões e alguns comentários sobre o trecho do código
/// <reference types="cypress" />

//Criação da Classe Page de Checkout
class CheckoutPage {

    //Método para digitar no campo de FirstName, recebendo o nome desejado
    digitarFirstName(firstName) {
        cy.get('[data-test="firstName"]').type(firstName)
    }

    //Método para digitar no campo de LastName, recebendo o sobrenome desejado
    digitarLastName(lastName) {
        cy.get('[data-test="lastName"]').type(lastName)
    }

    //Método para digitar no campo de PostalCode, recebendo o cep desejado
    digitarPostalCode(postalCode) {
        cy.get('[data-test="postalCode"]').type(postalCode)
    }

    //Método para clicar no botão de continuar
    clicarContinue() {
        cy.get("[class='btn_primary cart_button']").click()
    }

    //Método para clicar no botão de Finish
    clicarFinish() {
        cy.get("[class='btn_action cart_button']").click()
    }

    //Método para clicar no item e visualiza-lo, aqui ele ta clicando no primeiro que ele encontrar
    clicarVisualizarItem() {
        cy.get('.inventory_item_name').click()
    }

    //Método para clicar no botão de Cancelar
    clicarCancel() {
        cy.get("[class='cart_cancel_link btn_secondary']").click()
    }

    //Método para verificar a mensagem de compra realizada com sucesso
    verificarMensagemSuccessfullOrder() {
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    }

    //Método para verificar erros do formulário da tela de checkout, recebendo a mensagem de erro esperada pelo sistema
    verificarMensagemErrorCheckoutForm(msgError) {
        cy.get("[data-test='error']").should('have.text', msgError)
    }

    //Método para verificar mensagem de erro da tela de carrinho, quando o carrinho estiver vazio não poder prosseguir com o checkout
    verificarMensagemItemCarrinhoObrigatorio() {
        cy.get("[data-test='error']").should('have.text', 'Error: At least one product is required')
    }

    //Método para verificar se a lista de itens do checkout overview está vazia, se ela não existe
    verificarQtdVaziaDeItemAddOverview() {
        cy.get('.cart_list .cart_item').should('not.exist')
    }

    //Método para verificar se a página de checkout overview está amostra
    verificarPaginaCheckout() {
        cy.get('.subheader').should('have.text', 'Checkout: Overview')
    }
}

//Para facilitar a exportação da classe CarrinhoPage e agilizar no uso dela em outras partes do código
export default new CheckoutPage()