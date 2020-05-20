import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item, itemSize) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: { item, itemSize }
});

export const removeItem = index => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: index
});

export const clearItemFromCart = index => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: index
});

export const clearAllItemsFromCart = () => ({
  type: CartActionTypes.CLEAR_ALL_ITEMS_FROM_CART
});
