/// <reference types="cypress" />

class MenuPage {

    clicarLogout() {
        cy.get('#logout_sidebar_link').click()
    }

    clicarAbout() {
        cy.get('#about_sidebar_link').click()
    }

    clicarAllItems(){
        cy.get('#about_sidebar_link').click()
    }

}

export default new MenuPage()