import {PrimaryHeaderLocator} from "../locators/PrimaryHeaderLocator";

export default class PrimaryHeader {

    static clickBugerMenu() {
        cy.get(PrimaryHeaderLocator.BURGER_MENU_BTN).click();
    }

    static clickCartIconLink() {
        cy.get(PrimaryHeaderLocator.SHOPPING_CART_LINK).click();
    }
}