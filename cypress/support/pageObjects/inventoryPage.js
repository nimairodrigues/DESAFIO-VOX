/// <reference types="cypress" />

class InventoryPage {
    
    clicarMenu() {
        cy.get('.bm-burger-button').click()
    }

    existeItemVisivel() {
        cy.get('div[class=inventory_item]').should('be.visible')
    }

    clicarSocialTwitter() {
        cy.get('.social_twitter').click()
    }

    verificarTelaTwitter() {
        cy.title().should('have.text', 'Twitter')
    }

    clicarSocialFacebook() {
        cy.get('.social_facebook').click()
    }

    verificarTelaFacebook() {
        cy.title().should('have.text', 'Facebook')
    }

    clicarSocialLinkedin() {
        cy.get('.social_linkedin').click()
    }

    verificarTelaLinkedin() {
        cy.title().should('have.text', 'LinkedIn')
    }

    clicarCarrinho() {
        cy.get('[data-icon=shopping-cart]').click()
    }

    clicarAddToCartDoCard(ordem) {
        cy.get(".inventory_list > .inventory_item:nth-child("+ordem+") button").click()
    }

    clicarRemoveDoCard(ordem) {
        cy.get(".inventory_list > .inventory_item:nth-child("+ordem+") [class='btn_secondary btn_inventory']").click()
    }

    clicarVisualizarItem(ordem) {
        cy.get(".inventory_list .inventory_item:nth-child("+ordem+") > .inventory_item_img").click()
    }

    clicarAddToCartDoViewItem() {
        cy.get("[class='btn_primary btn_inventory']").click()
    }

    clicarRemoveDoViewItem() {
        cy.get("[class='btn_secondary btn_inventory']").click()
    }

    clicarBackDoViewItem() {
        cy.get('[class=inventory_details_back_button]').click( {force: true} )
    }

    verificarNumDeItemsCarrinho(num){
        cy.get('.fa-layers-counter').should('have.text', num)
    }

    verificarNumDeItensVazioCarrinho() {
        cy.get('.fa-layers-counter').should('not.exist')
    }

    
}

export default new InventoryPage()