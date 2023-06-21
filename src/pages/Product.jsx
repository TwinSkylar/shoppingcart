import React from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { QuantityPicker } from "react-qty-picker";
import { useState } from "react";

const Product = () => {
  const { product, cardPrice } = useLocation().state;
  const [total, setTotal] = useState(0);
  const productName = useParams();

  const handleChange = (value) => {
    setTotal(value * cardPrice);
  };
  return (
    <div className="product-details">
      <img
        className="product-image"
        src={product.sprites.front_default}
        alt={productName}
      ></img>
      {product.stats.map((stats) => {
        return (
          <div key={stats.stat.name}>
            <div className="statName">{stats.stat.name}</div>
            <div className="statValue">{stats.base_stat}</div>
          </div>
        );
      })}
      <div>Price: {cardPrice}</div>
      <QuantityPicker onChange={handleChange} />
      <div>Total: ${total}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
