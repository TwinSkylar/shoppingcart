import React from "react";
import "./styles/card.css";
import { Link } from "react-router-dom";
export default function Card({ pokemon }) {
  /*
    Purpose:  Card component to display each individual product.
    Parameters: 
     cardName:  Product name
     cardImg:  Product Image
     cardPrice:  Price of the card
  */

  const { cardName, cardImg, cardPrice} = pokemon;
  return (
    <Link to={`/product/${cardName}`} className="card" state={pokemon}>
      <button className="cardBtn">
        <img src={cardImg} alt={cardName}></img>
        <div className="productName">{cardName}</div>{" "}
        <div className="productPrice">Price: ${cardPrice}</div>
      </button>
    </Link>
  );
}
