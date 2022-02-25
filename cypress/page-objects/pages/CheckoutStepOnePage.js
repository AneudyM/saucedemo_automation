import BasePage from "../BasePage";

export default class CheckoutStepOnePage extends BasePage {
    static fillOutCheckoutInfo(firstName, lastName, postalCode) {
        cy.get("[data-test=firstName]").type(firstName);
        cy.get("[data-test=lastName]").type(lastName);
        cy.get("[data-test=postalCode]").type(postalCode);
    }

    static clickContinueButton() {
        cy.get("[data-test=continue]").click();
    }
}