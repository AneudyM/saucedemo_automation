import {CheckoutSummaryLocator} from "../locators/CheckoutSummaryLocator";
import {CheckoutCompleteLocator} from "../locators/CheckoutCompleteLocator";

const {PrimaryHeaderLocator} = require("../locators/PrimaryHeaderLocator");

class Validators {
    verifyCartBadgeNumber(expectedNumber) {
        cy.get(PrimaryHeaderLocator.SHOPPING_CART_BADGE)
            .should("have.text", expectedNumber);
    }

    verifyCartItemName(expectedName) {
        cy.get(CheckoutSummaryLocator.CART_LIST)
            .find(".inventory_item_name").contains(expectedName)
            .should("have.text", expectedName);
    }

    verifySubtotalAmount(expectedSubtotal) {
        cy.get(CheckoutSummaryLocator.SUBTOTAL_AMOUNT)
            .should("have.text", "Item total: $" + expectedSubtotal);
    }

    verifyTotalAmount(expectedTotal) {
        cy.get(CheckoutSummaryLocator.TOTAL_PRICE)
            .should("have.text", "Total: $" + expectedTotal);
    }

    verifyPurchaseCompleted() {
        cy.get(CheckoutCompleteLocator.THANK_YOU_MESSAGE)
            .should("have.text", "THANK YOU FOR YOUR ORDER")
    }
} export const validator = new Validators();
