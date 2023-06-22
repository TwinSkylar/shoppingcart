import React from "react";
import StoreMenu from "./StoreMenu";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router";
import "./styles/store.css";

/*
    Purpose:  A page that displays the store
*/
const Store = () => {
  const [products, setProducts] = useState([]);  //Stores all the products for a category

  const { id } = useParams();

/*
    Purpose:  Displays all the products for this category
*/

  const DisplayItems = () => {
    return (
      <>
        {products.map((pokemon) => {
          return <Card key={pokemon.cardName} pokemon={pokemon} />;
        })}
      </>
    );
  };

/*
    Purpose:  Loads the data into memory for the selected category
*/
  useEffect(() => {
    const loadData = async (startingId = 1) => {
      const pokemons = [];
      const limit = parseInt(startingId) + 8;
      for (let i = startingId; i <= limit; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await response.json();
        pokemons.push({
          cardName: pokemon.name,
          cardImg: pokemon.sprites.front_default,
          cardPrice: i,
          product: pokemon,
        });
      }
      setProducts(pokemons);

      return pokemons;
    };
    loadData(id);
  }, [id]);

  return (
    <div className="store-container">
      <StoreMenu />
      <div className="display-container">
        <DisplayItems />
      </div>
    </div>
  );
};

export default Store;
