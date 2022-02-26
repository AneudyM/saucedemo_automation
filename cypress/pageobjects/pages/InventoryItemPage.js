import BasePage from "../BasePage";
import {InventoryItemLocator} from "../locators/InventoryItemLocator";


export default class InventoryItemPage extends BasePage {

    static clickAddToCartButton() {
        cy.get(InventoryItemLocator.ADD_TO_CART_BUTTON).click()
    }

}