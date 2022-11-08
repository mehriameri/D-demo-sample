import {
	Add_To_Basket,
	Remove_From_Basket,
	Delete_From_Basket,
	Reset_ShoppingBasket,
} from "./ActionType";

const initState = {
	shoppingBasket: [], //[{},{}]
	totalquantity: 0,
	priceBeforeOff: 0,
	priceAfterOff: 0,
};
const ShoppingInfoReducer = (state = initState, action) => {
	switch (action.type) {
		case Add_To_Basket:
			const AddId = action.payload.id;
			const existInBasket =
				state.shoppingBasket.filter((item) => item.id === AddId).length > 0;
			if (existInBasket) {
				const AddItem = state.shoppingBasket.filter(
					(item) => item.id === AddId
				)[0];
				return {
					...state,
					totalquantity: state.totalquantity + 1,
					priceBeforeOff:
						state.priceBeforeOff +
						(AddItem.productInfo.oldPrice
							? parseInt(AddItem.productInfo.oldPrice)
							: parseInt(AddItem.productInfo.price)),
					priceAfterOff:
						state.priceAfterOff + parseInt(AddItem.productInfo.price),
					shoppingBasket: state.shoppingBasket.map((item) => {
						if (item.id == AddId) {
							return { ...item, quantity: item.quantity + 1 };
						} else {
							return item;
						}
					}),
				};
			} else {
				return {
					...state,
					totalquantity: state.totalquantity + 1,
					priceBeforeOff:
						state.priceBeforeOff +
						(action.payload.productInfo.oldPrice
							? parseInt(action.payload.productInfo.oldPrice)
							: parseInt(action.payload.productInfo.price)),
					priceAfterOff:
						state.priceAfterOff + parseInt(action.payload.productInfo.price),
					shoppingBasket: [...state.shoppingBasket, { ...action.payload }],
				};
			}
		case Remove_From_Basket:
			const removeId = action.payload.id;
			const removeItem = state.shoppingBasket.filter(
				(item) => item.id === removeId
			)[0];
			return {
				...state,
				totalquantity: state.totalquantity - 1,
				priceBeforeOff:
					state.priceBeforeOff -
					(removeItem.productInfo.oldPrice
						? parseInt(removeItem.productInfo.oldPrice)
						: parseInt(removeItem.productInfo.price)),
				priceAfterOff:
					state.priceAfterOff - parseInt(removeItem.productInfo.price),
				shoppingBasket: state.shoppingBasket.map((item) => {
					if (item.id === removeId) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				}),
			};
		case Delete_From_Basket:
			const deleteId = action.payload.id;
			const deleteItem = state.shoppingBasket.filter(
				(item) => item.id === deleteId
			)[0];
			return {
				...state,
				totalquantity: state.totalquantity - 1,
				priceBeforeOff:
					state.priceBeforeOff -
					(deleteItem.productInfo.oldPrice
						? parseInt(deleteItem.productInfo.oldPrice)
						: parseInt(deleteItem.productInfo.price)),
				priceAfterOff:
					state.priceAfterOff - parseInt(deleteItem.productInfo.price),
				shoppingBasket: state.shoppingBasket.filter(
					(item) => item.id != deleteId
				),
			};
		case Reset_ShoppingBasket:
			return {
				shoppingBasket: [],
				totalquantity: 0,
				priceBeforeOff: 0,
				priceAfterOff: 0,
			};
		default:
			return state;
	}
};

export default ShoppingInfoReducer;
