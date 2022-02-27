import {SecondaryHeaderLocator} from "../locators/SecondaryHeaderLocator";

export default class SecondaryHeaderComponent {
    clickBackToProductsButton() {
        cy.get(SecondaryHeaderLocator.BACK_TO_PRODUCTS_BTN).click();
    }
}