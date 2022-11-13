import { combineReducers } from "redux";
import LoginReducer from "../authentication/LoginReducer";
import DropDownReducer from "../searchDropDown/DropDownReducer";
import ShoppingInfoReducer from "../shoppingInfo/ShoppingInfoReducer";

const allReducers = combineReducers({
    userInfo: LoginReducer,
    shoppingBasketInfo: ShoppingInfoReducer,
    toggleDropDown: DropDownReducer
})
export default allReducers;