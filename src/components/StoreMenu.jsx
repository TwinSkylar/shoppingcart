import React from "react";
import { Link } from "react-router-dom";

const StoreMenu = () => {
  return (
    <nav className="store-nav">
      <h1>Store Menu</h1>
      <ul>
        <li>
        <Link to='/store' state={{group:'A', startingID:1}}>
            Group A
          </Link>
        </li>
        <li>
        <Link to='/store' state={{group:'B', startingID:10}}>
            Group B
          </Link>
        </li>
        <li>
        <Link to='/store' state={{group:'C', startingID:20}}>
            Group C
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default StoreMenu;
