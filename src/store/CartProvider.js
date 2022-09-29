import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        
    }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState , dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => { dispatchCartAction({type: 'ADD' , item: item})};
  const removeItemFromCartHandler = (id ) => { dispatchCartAction({tyoe: 'Remove' , id: id})};
 
 
  const cartContext = {
    items: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
