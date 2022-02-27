export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});
export const clearCart = () => ({
  type: 'CLEAR_CART',
});
export const removeCartItem = (pizzaID) => ({
  type: 'REMOVE_CART_ITEM',
  payload: pizzaID,
});
export const plusCartItem = (pizzaID) => ({
  type: 'PLUS_CART_ITEM',
  payload: pizzaID,
});
export const minusCartItem = (pizzaID) => ({
  type: 'MINUS_CART_ITEM',
  payload: pizzaID,
});
