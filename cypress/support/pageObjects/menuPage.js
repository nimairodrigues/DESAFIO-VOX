//Aqui ajuda na codificação dos testes em cypress na escrita, pois mostra sugestões e alguns comentários sobre o trecho do código
/// <reference types="cypress" />

//Criação da Classe Page de Menu
class MenuPage {

    //Método para clicar no link de logout da side bar de Menu
    clicarLogout() {
        cy.get('#logout_sidebar_link').click()
    }

    //Método para clicar no link de about da side bar de Menu
    clicarAbout() {
        cy.get('#about_sidebar_link').click()
    }

    //Método para clicar no link de All items da side bar de Menu, para visualizar a página de inventário
    clicarAllItems(){
        cy.get('#about_sidebar_link').click()
    }

}

//Para facilitar a exportação da classe CarrinhoPage e agilizar no uso dela em outras partes do código
export default new MenuPage()