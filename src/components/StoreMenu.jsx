import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const StoreMenu = () => {
  return (
    <>
      <nav className="store-nav">
        <h1>Store Menu</h1>
        <ul>
          <li>
            <Link to="/store/1">Group A</Link>
          </li>
          <li>
            <Link to="/store/20">Group B</Link>
          </li>
          <li>
            <Link to="/store/30">Group C</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default StoreMenu;
