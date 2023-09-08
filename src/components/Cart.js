import React from "react";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";

const Cart = () => {
    const cartItems = useAppSelector(state => state.cart.cart);
    console.log("cartItems", cartItems);

    return (
        <div>
           <h1>Cart will be here</h1> 
           
           {cartItems?.length === 0 && <p>Your cart is empty</p>}
            {cartItems.map((item) => (
                <Product key={item.id} {...item} cartItems={cartItems} />
            ))}
        </div>
    );
};

export default Cart;

