import BasePage from "../BasePage";

export default class PrimaryHeader extends BasePage {


    static clickBurgerMenu() {
        cy.get("#react-burger-menu-btn").click();
    }
}