/**
 * Locators for the web elements in the Checkout Summary Component of the Checkout Overview page.
 * @type {{CheckoutSummaryLocator: {CART_LIST: string, ITEM_TAX: string, TOTAL_PRICE: string, SUBTOTAL_AMOUNT: string}}}
 */
module.exports = {
    CheckoutSummaryLocator: {
        SUBTOTAL_AMOUNT: ".summary_subtotal_label",
        ITEM_TAX: ".summary_tax_label",
        TOTAL_PRICE: ".summary_total_label",
        CART_LIST: ".cart_list"
    }
}