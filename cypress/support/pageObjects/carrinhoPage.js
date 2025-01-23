//Aqui ajuda na codificação dos testes em cypress na escrita, pois mostra sugestões e alguns comentários sobre o trecho do código
/// <reference types="cypress" />

//Criação da Classe Page de Carrinho
class CarrinhoPage {

    //Método para clicar no botão de "Checkout" da tela de carrinho
    clicarCheckout() {
        cy.get("[class='btn_action checkout_button']").click()
    }

    //Método para clicar no botão de "Remove", de um item, da tela de carrinho
    clicarRemoverItem() {
        cy.get("[class='btn_secondary cart_button']").click()
    }

    //Método para verificar a quantidade de itens que há adicionado no carrinho, recebendo a quantidade esperada
    verificarQtdDeItemAdd(quantidade) {
        cy.get('.cart_list .cart_item').should('have.length', quantidade)
    }

    //Método para verificar se o carrinho está vazio, verificando se algum elemento de item não existe
    verificarQtdVaziaDeItemAdd() {
        cy.get('.cart_list .cart_item').should('not.exist')
    }

}

//Para facilitar a exportação da classe CarrinhoPage e agilizar no uso dela em outras partes do código
export default new CarrinhoPage()