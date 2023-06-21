import React from "react";
import { Link } from "react-router-dom";
import  "./styles/header.css";

const Header = ({cart}) => {
    
  return (
    <nav className="nav">
      <Link to ="/" className="site-title">Pokemon Store</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout ({cart.length})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
