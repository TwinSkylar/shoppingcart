import React from "react";
import StoreMenu from "./StoreMenu";
import { useLocation } from "react-router";
const Store = () => {
  const {group,startingId} = useLocation().state;
  return (
    <div className="store-container">
      <StoreMenu />
      <div className="display-container">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

const loadData = async(startingId = 1)=>{

}
export default Store;
