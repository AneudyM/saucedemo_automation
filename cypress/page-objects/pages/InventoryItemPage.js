import BasePage from "../BasePage";

export default class InventoryItemPage extends BasePage {
    static clickAddToCartButton() {
        cy.get("#inventory_item_container").find("button").contains("Add to cart").click();
    }

    static displayRemoveFromCartButton() {
        cy.get("#inventory_item_container").find("button").should("have.text", "Remove");
    }

    static clickShoppingCartButton() {
        cy.get("#shopping_cart_container > a").click();
    }
}