import React from "react";
import StoreMenu from "./StoreMenu";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router";
import "./styles/store.css"
const Store = () => {
  const [products, setProducts] = useState([
  ]);

  const { id } = useParams();

  const DisplayItems = () => {
    return (
      <>
        {products.map((pokemon) => {
          return <Card key={pokemon.cardName} pokemon={pokemon} />;
        })}
      </>
    );
  };

  useEffect(() => {
    const loadData = async (startingId = 1) => {
      const pokemons = [];
      const limit = parseInt(startingId)+8;
      for (let i = startingId; i <= limit; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await response.json();
        pokemons.push({
          cardName: pokemon.name,
          cardImg: pokemon.sprites.front_default,
          cardPrice:  i ,
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
