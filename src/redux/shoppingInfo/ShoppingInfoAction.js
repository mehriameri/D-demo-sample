import {
	Remove_From_Basket,
	Add_To_Basket,
	Delete_From_Basket,
	Reset_ShoppingBasket,
} from "./ActionType";

export const addToBasket = (BasketItem) => {
	return {
		type: Add_To_Basket,
		payload: {
			id: BasketItem.id,
			productInfo: BasketItem.productInfo,
			quantity: BasketItem.quantity,
		},
	};
};
export const removeFromBasket = (BasketItem) => {
	return {
		type: Remove_From_Basket,
		payload: {
			id: BasketItem.id,
			productInfo: BasketItem.productInfo,
		},
	};
};
export const deleteFromBasket = (BasketItem) => {
	return {
		type: Delete_From_Basket,
		payload: {
			id: BasketItem.id,
			productInfo: BasketItem.productInfo,
		},
	};
};
export const resetShoppingBasket = () => {
	return {
		type: Reset_ShoppingBasket,
	};
};
