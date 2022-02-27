import BasePage from "../BasePage";
import {action} from "../actions/WebActions";
import HeaderComponent from "../components/HeaderComponent";

export default class InventoryListPage extends BasePage {

    static clickItem(itemName) {
        action.clickItem(itemName)
    }

    static addItemToCart(itemName) {
        action.addToCart(itemName);
    }

    static removeItemFromCart(itemName) {
        action.removeFromCart(itemName);
    }

    static goToCart() {
        let header = new HeaderComponent();
        header.clickCartIcon();
    }

}