/**
 * Locators for the web elements in the Checkout: Complete! page.
 * @type {{CheckoutCompleteLocator: {PONY_EXPRESS_IMG: string, THANK_YOU_MESSAGE: string, BACK_HOME_BUTTON: string}}}
 */
module.exports = {
    CheckoutCompleteLocator: {
        THANK_YOU_MESSAGE: ".complete-header",
        BACK_HOME_BUTTON: "[data-test=back-to-products]",
        PONY_EXPRESS_IMG: ".pony_express"
    }
}