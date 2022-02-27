import {CheckoutButtonsLocator} from "../locators/CheckoutButtonsComponentLocator";

export default class CheckoutButtonsComponent {
    clickContinue() {
        cy.get(CheckoutButtonsLocator.CONTINUE_BUTTON).click();
    }

    clickCancel() {
        cy.get(CheckoutButtonsLocator.CANCEL_BUTTON).click();
    }

    clickFinish() {
        cy.get(CheckoutButtonsLocator.FINISH_BUTTON).click();
    }

    clickContinueShopping() {
        cy.get(CheckoutButtonsLocator.CONTINUE_SHOPPING_BUTTON).click();
    }

    clickCheckout() {
        cy.get(CheckoutButtonsLocator.CHECKOUT_BUTTON).click();
    }
}