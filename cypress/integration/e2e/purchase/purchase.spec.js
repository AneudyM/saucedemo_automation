import {url} from "../../../../config";
import LoginPage from "../../../page-objects/pages/LoginPage";
import InventoryPage from "../../../page-objects/pages/InventoryPage";
import InventoryItemPage from "../../../page-objects/pages/InventoryItemPage";
import PrimaryHeader from "../../../page-objects/components/PrimaryHeader";

describe("Just a test", function () {
    before(function () {
        cy.visit(url);
        cy.fixture("user").then(user => {
            const login_username = user.username;
            const login_password = user.password;
            LoginPage.login(login_username, login_password);
        });
    });

    it("should allow user to click on an available item", () => {
        cy.fixture("item").then(item => {
            const title = item.title;
            InventoryPage.clickItemByTitle(title);
        });
    });

    it("should verify the clicked item is the expected item", () => {
        cy.get(".inventory_details_name.large_size").should("have.text", "Sauce Labs Bike Light");
    });

    it("should verify the clicked item's price is the expected price", () => {
        cy.get(".inventory_details_price").should("have.text", "$9.99");
    });

    it("should allow the user to add the item to cart", () => {
        InventoryItemPage.clickAddToCartButton();
    });

    it("should verify the item was successfully added to the cart", () => {
        InventoryItemPage.displayRemoveFromCartButton();
    });

    it("should allow the user to click on the cart icon to go to cart", () => {
        InventoryItemPage.clickShoppingCartButton();
    });

});