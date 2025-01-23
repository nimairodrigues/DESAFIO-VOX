//Aqui ajuda na codificação dos testes em cypress na escrita, pois mostra sugestões e alguns comentários sobre o trecho do código
/// <reference types="cypress" />

//Criação da Classe Page de Inventory
class InventoryPage {
    
    //Método para clicar na side bar, abrindo o menu do sistema
    clicarMenu() {
        cy.get('.bm-burger-button').click()
    }

    //Método para verificar se existe algum item visível, sendo utilizado para verificar se a página de inventário está amostra
    existeItemVisivel() {
        cy.get('div[class=inventory_item]').should('be.visible')
    }

    //Método para clicar no ícone do twitter para abrir a rede social twitter do sistema
    clicarSocialTwitter() {
        cy.get('.social_twitter').click()
    }

    //Método para verificar se o título da página é "Twitter", verificando se abriu a tela
    verificarTelaTwitter() {
        cy.title().should('have.text', 'Twitter')
    }

    //Método para clicar no ícone do facebook para abrir a rede social facebook do sistema
    clicarSocialFacebook() {
        cy.get('.social_facebook').click()
    }

    //Método para verificar se o título da página é "Facebook", verificando se abriu a tela
    verificarTelaFacebook() {
        cy.title().should('have.text', 'Facebook')
    }

    //Método para clicar no ícone do linkedin para abrir a rede social linkedin do sistema
    clicarSocialLinkedin() {
        cy.get('.social_linkedin').click()
    }

    //Método para verificar se o título da página é "Linkedin", verificando se abriu a tela
    verificarTelaLinkedin() {
        cy.title().should('have.text', 'LinkedIn')
    }

    //Método para acessar a tela de carrinho
    clicarCarrinho() {
        cy.get('[data-icon=shopping-cart]').click()
    }

    //Método para clicar no botão de "Add to cart", adicionando um ítem no carrinho, a partir da ordem dos itens, recebendo a ordem desejada
    clicarAddToCartDoCard(ordem) {
        cy.get(".inventory_list > .inventory_item:nth-child("+ordem+") button").click()
    }

    //Método para clicar no botão de "Remove", removendo um ítem do carrinho, a partir da ordem dos itens, recebendo a ordem desejada
    clicarRemoveDoCard(ordem) {
        cy.get(".inventory_list > .inventory_item:nth-child("+ordem+") [class='btn_secondary btn_inventory']").click()
    }

    //Método para clicar na imagem do item, abrindo a página de visualização do item, 
    //a partir da ordem dos itens, recebendo a ordem desejada
    clicarVisualizarItem(ordem) {
        cy.get(".inventory_list .inventory_item:nth-child("+ordem+") > .inventory_item_img").click()
    }

    //Método para clicar no botão de "Add to cart", adicionando um ítem no carrinho,
    //da página de visualização do item
    clicarAddToCartDoViewItem() {
        cy.get("[class='btn_primary btn_inventory']").click()
    }

    //Método para clicar no botão de "Remove", removendo um ítem do carrinho,
    //da página de visualização do item
    clicarRemoveDoViewItem() {
        cy.get("[class='btn_secondary btn_inventory']").click()
    }

    //Método para clicar no botão de "Back", voltando para a página de inventário,
    //da página de visualização do item
    clicarBackDoViewItem() {
        cy.get('[class=inventory_details_back_button]').click( {force: true} )
    }

    //Método para verificar o número que consta no ícone do carrinho, 
    //que informa quantos itens está adicionado, recebendo o número esperado
    verificarNumDeItemsCarrinho(num){
        cy.get('.fa-layers-counter').should('have.text', num)
    }

    //Método para verificar se não há contagem de itens no carrinho,
    //se a numeração está zerada, ou se não existe
    verificarNumDeItensVazioCarrinho() {
        cy.get('.fa-layers-counter').should('not.exist')
    }

    
}

//Para facilitar a exportação da classe CarrinhoPage e agilizar no uso dela em outras partes do código
export default new InventoryPage()