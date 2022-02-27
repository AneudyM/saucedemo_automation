import {CartContentsLocator} from "../locators/CartContentsLocator";
import {InventoryListLocator} from "../locators/InventoryListLocator";
import {getAddToCartButtonLocatorFor, getRemoveButtonLocatorFor} from "../locators/ViewInventoryItemLocator";

class WebActions {
    clickItem(itemName) {
        cy.get(InventoryListLocator.INVENTORY_LIST)
            .find(InventoryListLocator.INVENTORY_ITEM_NAME)
            .contains(itemName)
            .click();
    }

    addToCart(itemName) {
        cy.get(getAddToCartButtonLocatorFor(itemName)).click();
    }

    removeFromCart(itemName) {
        cy.get(getRemoveButtonLocatorFor(itemName)).click();
    }

    clickCheckoutButton() {
        cy.get(CartContentsLocator.CHECKOUT_BUTTON).click();
    }
} export const action = new WebActions();