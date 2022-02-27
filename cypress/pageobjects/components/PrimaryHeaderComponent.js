import {PrimaryHeaderLocator} from "../locators/PrimaryHeaderLocator";

export default class PrimaryHeaderComponent {
    clickBurgerMenu() {
        cy.get(PrimaryHeaderLocator.BURGER_MENU_BTN).click();
    }

    clickCartIcon() {
        cy.get(PrimaryHeaderLocator.SHOPPING_CART_LINK).click();
    }
}