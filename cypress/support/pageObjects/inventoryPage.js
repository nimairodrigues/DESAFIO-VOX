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
}

export default new InventoryPage()