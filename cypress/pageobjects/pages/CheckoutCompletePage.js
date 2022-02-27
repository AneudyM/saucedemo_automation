import {CheckoutCompleteLocator} from "../locators/CheckoutCompleteLocator";

export default class CheckoutCompletePage {

    static goBackToHomePage() {
        cy.get(CheckoutCompleteLocator.BACK_HOME_BUTTON).click();
    }

}