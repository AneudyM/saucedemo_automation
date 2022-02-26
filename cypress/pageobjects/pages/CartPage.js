import BasePage from "../BasePage";

export default class CartPage extends BasePage {
    static clickCheckoutButton() {
        cy.get("[data-test=checkout]").click();
    }
}