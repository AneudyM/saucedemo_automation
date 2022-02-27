import BasePage from "../BasePage";
import {CheckoutInfoFormLocator} from "../locators/CheckoutInfoFormLocator";
import CheckoutButtonsComponent from "../components/CheckoutButtonsComponent";

export default class CheckoutStepOnePage extends BasePage {

    static fillOutCheckoutInfo(firstName, lastName, postalCode) {
        cy.get(CheckoutInfoFormLocator.FIRSTNAME_INPUT_FIELD).type(firstName);
        cy.get(CheckoutInfoFormLocator.LASTNAME_INPUT_FIELD).type(lastName);
        cy.get(CheckoutInfoFormLocator.POSTALCODE_INPUT_FIELD).type(postalCode);
    }

    static clickContinueButton() {
        let checkoutButtonsComponent = new CheckoutButtonsComponent()
        checkoutButtonsComponent.clickContinue();
    }

}