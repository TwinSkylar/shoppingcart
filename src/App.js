import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Product from "./pages/Product";
import { useState } from "react";
import { useEffect } from "react";

function App() {
const [cart,setCart] = useState([]);

const addToCart = (pokemon,qty)=>{
  setCart(cart => [...cart, {pokemon: pokemon, quantity:qty}]);
}


  return (
    <>
      <Header cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path=":id" element={<Store />} />
        </Route>
        <Route path="/product">
          <Route index element={<Product addToCart={addToCart}/>} />
          <Route path=":name" element={<Product addToCart={addToCart}/>} />
        </Route>
        <Route path="/checkout" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}



export default App;
