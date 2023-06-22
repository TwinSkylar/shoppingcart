import React from "react";
import "./styles/card.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  /*
    Purpose:  Card component to display each individual card.
    Parameters: 
     card:  A card object which contains the information needed
     chooseCard:  a callback function to handle the choice of a card
     gameOver:  True if the game is over
    */

  const { pokemon, quantity, price, id } = props;
  const subTotal = quantity*price;
  return (
    <>
      <div className="bask-item">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.species.name}
        ></img>
        <div className="product-name">{pokemon.species.name}</div>{" "}
        <div className="product-price">Price: ${price}</div>
        <div className="product-qty">Quantity:{quantity}</div>
        <div className="product-subTotal">SubTotal:{subTotal}</div>

      </div>
    </>
  );
}


