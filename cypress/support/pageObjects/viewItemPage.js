class ViewItemPage {
    clicarAddToCart() {
        cy.get(".inventory_details [class='btn_primary btn_inventory']").click()
    }

    clicarRemoveDoCart() {
        cy.get(".inventory_details [class='btn_secondary btn_inventory']").click()
    }
}

export default new ViewItemPage()