import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Store from "./components/Store";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Product from "./pages/Product";

import { useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path=":id" element={<Store />} />
        </Route>
        <Route path="/product">
          <Route index element={<Product />} />
          <Route path=":name" element={<Product />} />
        </Route>
        <Route path="/checkout" element={<Cart />} />
        <Route path="/nav" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}



export default App;
