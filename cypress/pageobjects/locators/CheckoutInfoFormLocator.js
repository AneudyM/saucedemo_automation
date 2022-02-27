/**
 * Locators for web elements in the Checkout: Your Information page.
 * @type {{CheckoutInfoFormLocator: {FIRSTNAME_INPUT_FIELD: string, LASTNAME_INPUT_FIELD: string, POSTALCODE_INPUT_FIELD: string}}}
 */
module.exports = {
    CheckoutInfoFormLocator: {
        FIRSTNAME_INPUT_FIELD: "[data-test=firstName]",
        LASTNAME_INPUT_FIELD: "[data-test=lastName]",
        POSTALCODE_INPUT_FIELD: "[data-test=postalCode]"
    }
}