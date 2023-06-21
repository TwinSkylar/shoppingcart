import React from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";

const Product = () => {
  const pokemon = useLocation().state;
  const productName = useParams();
  console.log(pokemon);

  return (
    <div className="product-details">
      <img className="product-image" src={pokemon.sprites.front_default} alt={productName}></img>
      {pokemon.stats.map((stats) => {
        return (
          <>
            <div key={stats.stat.name}>
              <div className="statName">{stats.stat.name}</div>
              <div className="statValue">{stats.base_stat}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Product;
