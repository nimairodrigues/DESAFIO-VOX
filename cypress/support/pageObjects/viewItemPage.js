//Aqui ajuda na codificação dos testes em cypress na escrita, pois mostra sugestões e alguns comentários sobre o trecho do código
/// <reference types="cypress" />

//Criação da Classe Page de View Item
class ViewItemPage {

    //Método para clicar no botão de "Add to Cart", para adicionar o item ao carrinho, da tela de visualização de item
    clicarAddToCart() {
        cy.get(".inventory_details [class='btn_primary btn_inventory']").click()
    }

    //Método para clicar no botão de "Remove, para remover o item do carrinho, da tela de visualização de item
    clicarRemoveDoCart() {
        cy.get(".inventory_details [class='btn_secondary btn_inventory']").click()
    }
}

//Para facilitar a exportação da classe CarrinhoPage e agilizar no uso dela em outras partes do código
export default new ViewItemPage()