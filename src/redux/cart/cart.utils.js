
export const addItemToCart = (cartItems, cartItemToAdd, cartItemSize) => {
  // check if the item is already added onto the cart.
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id && cartItem.size === cartItemSize
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id && cartItem.size === cartItemSize
        ? { ...cartItem, amount: cartItem.amount + 1, size: cartItemSize } // increase the item's quantity by 1
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, amount: 1, size: cartItemSize }];
};

export const removeItemFromCart = (cartItems, indexToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem, index) => index === indexToRemove
  );

  if (existingCartItem.amount === 1) {
    return cartItems.filter((cartItem, index) => index !== indexToRemove);
  }

  return cartItems.map(cartItem =>
    cartItem.id === existingCartItem.id && cartItem.size === existingCartItem.size
      ? { ...cartItem, amount: cartItem.amount - 1 }
      : cartItem
  );
};
