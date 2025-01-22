class InventoryPage {
    
    existeItemVisivel(){
        cy.get('div[class=inventory_item]').should('be.visible')
    }

    
}

export default new InventoryPage()