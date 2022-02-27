import PrimaryHeaderComponent from "./PrimaryHeaderComponent";
import SecondaryHeaderComponent from "./SecondaryHeaderComponent";

export default class HeaderComponent {
    clickCartIcon() {
        let primaryHeaderComponent = new PrimaryHeaderComponent();
        primaryHeaderComponent.clickCartIcon();
    }

    clickBurgerMenu() {
        let primaryHeaderComponent = new PrimaryHeaderComponent();
        primaryHeaderComponent.clickBurgerMenu();
    }

    clickGoBackToProductsButton() {
        let secondaryHeaderComponent = new SecondaryHeaderComponent();
        secondaryHeaderComponent.clickBackToProductsButton();
    }
}