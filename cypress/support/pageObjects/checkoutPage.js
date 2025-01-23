class CheckoutPage {

    digitarFirstName(firstName) {
        cy.get('[data-test="firstName"]').type(firstName)
    }

    digitarLastName(lastName) {
        cy.get('[data-test="lastName"]').type(lastName)
    }

    digitarPostalCode(postalCode) {
        cy.get('[data-test="postalCode"]').type(postalCode)
    }

    clicarContinue() {
        cy.get("[class='btn_primary cart_button']").click()
    }

    clicarFinish() {
        cy.get("[class='btn_action cart_button']").click()
    }

    clicarVisualizarItem() {
        cy.get('.inventory_item_name').click()
    }

    clicarCancel() {
        cy.get("[class='cart_cancel_link btn_secondary']").click()
    }

    verificarMensagemSuccessfullOrder() {
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    }

    verificarMensagemErrorCheckoutForm(msgError) {
        cy.get("[data-test='error']").should('have.text', msgError)
    }

    verificarMensagemItemCarrinhoObrigatorio() {
        cy.get("[data-test='error']").should('have.text', 'Error: At least one product is required')
    }

    verificarQtdVaziaDeItemAddOverview() {
        cy.get('.cart_list .cart_item').should('not.exist')
    }

    verificarPaginaCheckout() {
        cy.get('.subheader').should('have.text', 'Checkout: Overview')
    }
}

export default new CheckoutPage()