import BasePage from "../BasePage";
import LoginPage from "./LoginPage";

export default class InventoryPage extends BasePage {
    static clickItemByTitle(itemName) {
        cy.get(".inventory_list").find(".inventory_item_name").contains(itemName).click();
    }
}