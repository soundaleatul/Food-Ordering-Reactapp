import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart , removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem =()=>{
    dispatch(removeItem())
  }

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-1 m-2 bg-blue-400 text-white rounded-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && (
          <h1 className="text-gray-400 font-bold">Your cart is empty</h1>
        )}
        <ItemList items={cartItems} />
        <button
          className="p-1 m-2 bg-red-400 text-white rounded-lg cursor-pointer"
          onClick={handleRemoveItem}
        >
          Remove item
        </button>
       
        
      
      </div>
      
    </div>
  );
};

export default Cart;
