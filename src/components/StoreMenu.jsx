import React from "react";
import { Link} from "react-router-dom";

/*
    Purpose:  A page that displays the different categories for the store
*/
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
    </>
  );
};

export default StoreMenu;
