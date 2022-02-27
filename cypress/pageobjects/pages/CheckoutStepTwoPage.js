import BasePage from "../BasePage";
import CheckoutButtonsComponent from "../components/CheckoutButtonsComponent";

export default class CheckoutStepTwoPage extends BasePage {

    static clickFinishButton() {
        let checkoutButtonComponent = new CheckoutButtonsComponent();
        checkoutButtonComponent.clickFinish();
    }

    static clickCancelButton() {
        let checkoutButtonComponent = new CheckoutButtonsComponent();
        checkoutButtonComponent.clickCancel()
    }

}