import React
 from "react";
import "./styles/card.css"
export default function Card({ pokemon }) {
    /*
    Purpose:  Card component to display each individual card.
    Parameters: 
     card:  A card object which contains the information needed
     chooseCard:  a callback function to handle the choice of a card
     gameOver:  True if the game is over
    */
   
     const { cardName, cardImg,cardPrice } = pokemon;
     return (
       <div className="card">
         <button className="cardBtn" >
           <img src={cardImg} alt={cardName}></img>
           <div className='productName'>{cardName}</div> <div className='productPrice'>Price: ${cardPrice}</div>
         </button>
       </div>
     );
   }
   