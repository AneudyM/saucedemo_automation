import * as item from "../../fixtures/item.json";

module.exports = {
    InventoryItemLocator: {
        ITEM_NAME:".inventory_details_name.large_size",
        ADD_TO_CART_BUTTON: "[data-test=add-to-cart-" + item.name.replaceAll(" ", "-").toLowerCase() + "]",
        REMOVE_BUTTON: "[data-test=remove-" + item.name.replaceAll(" ", "-").toLowerCase() + "]",
        PRICE: ".inventory_details_price"
    }
}