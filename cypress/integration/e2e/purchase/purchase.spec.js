import {url} from "../../../../config";
import LoginPage from "../../../pageobjects/pages/LoginPage";
import InventoryListPage from "../../../pageobjects/pages/InventoryListPage";
import {PrimaryHeaderLocator} from "../../../pageobjects/locators/PrimaryHeaderLocator";
import {SecondaryHeaderLocator} from "../../../pageobjects/locators/SecondaryHeaderLocator";
import InventoryItemPage from "../../../pageobjects/pages/InventoryItemPage";
import {InventoryItemLocator} from "../../../pageobjects/locators/InventoryItemLocator";

describe("Purchase Item Fow Test", () => {
    before(function () {
        cy.visit(url);
        cy.fixture("user").then(user => {
            const login_username = user.username;
            const login_password = user.password;
            LoginPage.login(login_username, login_password);
        });
    });

    it("should allow user to purchase an item successfully", () => {
        cy.fixture("item").then(item => {
            const name = item.name;
            InventoryListPage.clickItemWithName(name);
        });
        // verify we are in the item details page or inventory item page
        cy.isVisible(SecondaryHeaderLocator.BACK_TO_PRODUCTS_BTN);
        InventoryItemPage.clickAddToCartButton();
        cy.isVisible(InventoryItemLocator.REMOVE_BUTTON);
        cy.isVisible(PrimaryHeaderLocator.SHOPPING_CART_BADGE);

    });


});