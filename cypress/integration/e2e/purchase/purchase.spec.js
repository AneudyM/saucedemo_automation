import {login_password, login_username, url} from "../../../../config";
import LoginPage from "../../../pageobjects/pages/LoginPage";
import InventoryListPage from "../../../pageobjects/pages/InventoryListPage";
import * as item from "../../../fixtures/item.json";
import * as user from "../../../fixtures/user.json";
import CartPage from "../../../pageobjects/pages/CartPage";
import {validator} from "../../../pageobjects/validators/Validators";
import CheckoutStepOnePage from "../../../pageobjects/pages/CheckoutStepOnePage";
import CheckoutStepTwoPage from "../../../pageobjects/pages/CheckoutStepTwoPage";

describe("Purchase Item Fow Test", () => {
    beforeEach(function () {
        cy.visit(url);
        LoginPage.login(login_username, login_password);
    });

    it("should allow user to purchase an item successfully", () => {
        InventoryListPage.addItemToCart(item.bikeLight.name);
        let expectedQuantity = Number(item.bikeLight.quantity);
        validator.verifyCartBadgeNumber(expectedQuantity);
        InventoryListPage.goToCart();
        CartPage.clickCheckoutButton();
        CheckoutStepOnePage.fillOutCheckoutInfo(user.firstname, user.lastname, user.zip);
        CheckoutStepOnePage.clickContinueButton();
        validator.verifyCartItemName(item.bikeLight.name);
        let expectedSubtotal = Number(item.bikeLight.price);
        validator.verifySubtotalAmount(expectedSubtotal);
        let expectedTotal = "10.79";
        validator.verifyTotalAmount(expectedTotal);
        CheckoutStepTwoPage.clickFinishButton();
        validator.verifyPurchaseCompleted();
    });

    it("should allow user to purchase multiple items successfully", () => {
        InventoryListPage.addItemToCart(item.bikeLight.name);
        InventoryListPage.addItemToCart(item.backpack.name);
        let expectedQuantity = Number(item.bikeLight.quantity) + Number(item.backpack.quantity)
        validator.verifyCartBadgeNumber(expectedQuantity);
        InventoryListPage.goToCart();
        validator.verifyCartItemName(item.bikeLight.name);
        validator.verifyCartItemName(item.backpack.name);
        CartPage.clickCheckoutButton();
        CheckoutStepOnePage.fillOutCheckoutInfo(user.firstname, user.lastname, user.zip);
        CheckoutStepOnePage.clickContinueButton();
        let expectedSubtotal = Number(item.bikeLight.price) + Number(item.backpack.price);
        validator.verifySubtotalAmount(expectedSubtotal);
        let expectedTotal = "43.18";
        validator.verifyTotalAmount(expectedTotal);
        CheckoutStepTwoPage.clickFinishButton();
        validator.verifyPurchaseCompleted();
    });

});