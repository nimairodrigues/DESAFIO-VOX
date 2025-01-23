class CarrinhoPage {

    clicarCheckout() {
        cy.get('.btn_action checkout_button').click()
    }

    clicarRemoverItem() {
        cy.get("[class='btn_secondary cart_button']").click()
    }

    verificarQtdDeItemAdd(quantidade) {
        cy.get('.cart_list .cart_item').should('have.length', quantidade)
    }

    verificarQtdVaziaDeItemAdd() {
        cy.get('.cart_list .cart_item').should('not.exist')
    }

}

export default new CarrinhoPage()