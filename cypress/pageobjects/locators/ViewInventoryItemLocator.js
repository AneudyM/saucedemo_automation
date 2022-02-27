/**
 * Locators for the web elements in the View Inventory Item page.
 * @type {{InventoryItemLocator: {PRICE: string, ITEM_NAME: string}}}
 */
module.exports = {
    InventoryItemLocator: {
        ITEM_NAME:".inventory_details_name.large_size",
        PRICE: ".inventory_details_price"
    }
}

module.exports = {
    getAddToCartButtonLocatorFor(itemName) {
        return "[data-test=add-to-cart-" + itemName.replaceAll(" ", "-").toLowerCase() + "]";
    },

    getRemoveButtonLocatorFor(itemName) {
        return "[data-test=remove-" + itemName.replaceAll(" ", "-").toLowerCase() + "]";
    }
}