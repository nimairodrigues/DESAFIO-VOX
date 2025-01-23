//Aqui ajuda na codificação dos testes em cypress na escrita, pois mostra sugestões e alguns comentários sobre o trecho do código
/// <reference types="cypress" />

//Criação da Classe Page de Login
class LoginPage {

    //Método para digitar no campo Username da tela de Login, recebendo apenas o usuário
    digitarUsername(username) {
        cy.get('[data-test=username]').type(username);
    }

    //Método para digitar no campo Username da tela de Login, recebendo apenas a senha
    digitarPassword(password) {
        cy.get('[data-test="password"]').type(password)
    }

    //Método para clicar no botão de login, realizando o login
    clicarLogin() {
        cy.get('#login-button').click()
    }

    //Método para verificar a mensagem de erro da tela de login, recebendo a mensagem de erro esperada pelo sistema
    verificarMensagemErro(mensagemErro) {
        cy.get('[data-test="error"]').should('have.text', mensagemErro)
    }

    //Método para verificar se a página de login está visível, verificando se o  botão existe
    //Possível utilizar também .should('be.visible')
    verificarTelaLogin() {
        cy.get('#login-button').should('exist')
    }

    //Método para realizar o login direto sem ter que chamar outros 3 métodos, 
    //agrupando os 3 métodos de interação com o login em 1 método, 
    //diminuindo código no arquivo de testes
    logar(username, password) {
        this.digitarUsername(username)
        this.digitarPassword(password)
        this.clicarLogin()
    }
}

//Para facilitar a exportação da classe CarrinhoPage e agilizar no uso dela em outras partes do código
export default new LoginPage()