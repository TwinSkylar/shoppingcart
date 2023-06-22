import React from "react";
import CheckoutItem from "./CheckoutItem";
import { useState } from "react";

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

/*{cart.map((pokemon) => {
  return <Card key={pokemon.cardName} pokemon={pokemon} />;
      <CheckoutItem name={pokemon.species.name} quantity={quantity} price={pokemon.held_items.id} id={id}/>

})}*/
