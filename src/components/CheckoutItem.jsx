import React from "react";
import "./styles/card.css";

export default function Card(props) {
  /*
    Purpose:  A component that displays individual checkout items
    Parameters: 
     pokemon:  An object containing all the information there is about this product
     quantity:  The quantity of pokemon purchased
     price:  The price of the an individual pokemon
    */

  const { pokemon, quantity, price } = props;
  const subTotal = quantity * price;
  return (
    <>
      <div className="bask-item">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.species.name}
        ></img>
        <div className="product-name">{pokemon.species.name}</div>
        <div className="product-price">Price: ${price}</div>
        <div className="product-qty">Quantity:{quantity}</div>
        <div className="product-subTotal">SubTotal:{subTotal}</div>
      </div>
    </>
  );
}
