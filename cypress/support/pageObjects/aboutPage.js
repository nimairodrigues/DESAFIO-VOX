//Aqui ajuda na codificação dos testes em cypress na escrita, pois mostra sugestões e alguns comentários sobre o trecho do código
/// <reference types="cypress" />

//Criação da Classe Page de About
class AboutPage {

    //Método para verificar se o título da tela é igual a "About", verificando se a tela de about está aberta e está em foco
    verificarTelaAbout(){
        cy.title().should('be.equal', 'About')
    }

}

//Para facilitar a exportação da classe CarrinhoPage e agilizar no uso dela em outras partes do código
export default new AboutPage()