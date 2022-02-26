import BasePage from "../BasePage";

export default class CheckoutStepTwoPage extends BasePage {
    static clickFinishButton() {
        cy.get("[data-test=finish]").click();
    }
}