import React from "react";
import CheckoutItem from "./CheckoutItem";

  /*
    Purpose:  A webpage displaying all the items in the cart
    Parameters: 
     cart:  An array of objects containing each invididual cart items
     removeFromCart:  A function to remove the cart items 
  */

const Cart = ({ cart,removeFromCart }) => {
  let total = 0;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => {
        const { pokemon, quantity, id } = item;
        total += quantity * pokemon.id;
        return (
          <>
            <CheckoutItem
              key={id}
              pokemon={pokemon}
              quantity={quantity}
              price={pokemon.id}
              id={id}
            />
            <button onClick={()=>removeFromCart(id)}>Remove</button>
          </>
        );
      })}
      <h1>Total: {total}</h1>
    </div>
  );
};

export default Cart;
