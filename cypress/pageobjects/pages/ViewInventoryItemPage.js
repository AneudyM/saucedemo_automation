import BasePage from "../BasePage";
import HeaderComponent from "../components/HeaderComponent";

export default class ViewInventoryItemPage extends BasePage {

    static goBackToProductsList() {
        let header = new HeaderComponent();
        header.clickGoBackToProductsButton();
    }

}