import BasePage from "../BasePage";
import {InventoryListLocator} from "../locators/InventoryListLocator";

export default class InventoryListPage extends BasePage {
    static clickItemWithName(itemName) {
        cy.get(InventoryListLocator.INVENTORY_LIST).find(InventoryListLocator.INVENTORY_ITEM_NAME).contains(itemName).click();
    }
}