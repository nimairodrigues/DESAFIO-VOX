class Login {

    digitarUsername(username) {
        cy.get('[data-test=username]').type(username);
    }

    digitarPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    clicarLogin() {
        cy.get('#login-button').click()
    }

    verificarMensagemErro(mensagemErro) {
        cy.get('[data-test="error"]').should('have.text', mensagemErro)
    }

    verificarTelaLogin() {
        cy.get('#login-button').should('exist')
    }
}

export default new Login()