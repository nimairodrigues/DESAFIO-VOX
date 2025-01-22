class AboutPage {

    verificarTelaAbout(){
        cy.get('cy.about').should('be.visible')
    }

}

export default new AboutPage()