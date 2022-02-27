import BasePage from "../BasePage";
import CheckoutButtonsComponent from "../components/CheckoutButtonsComponent";

export default class CartPage extends BasePage {

    static clickCheckoutButton() {
        let checkoutButtonsComponent = new CheckoutButtonsComponent();
        checkoutButtonsComponent.clickCheckout();
    }

}