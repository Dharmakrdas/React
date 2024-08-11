import { useState } from "react";
import ProductList from "./ProductList";
import { DOWN_ARROW } from "./utils/constant";

const ResturentOptionMenu = ({ data,isVisible ,setVisible ,index}) => {
console.log("click item",isVisible);

    return (
      <div className="menu-container">
        <div className="menu-items">
          <p className="heading-text">
            {data?.title} ({data?.itemCards?.length})
          </p>
          <img
          onClick={()=>setVisible(index)}
            alt="down-arrow.png"
            src={DOWN_ARROW}
            className="down-arrow"
          ></img>
        </div>
       {isVisible === true && ( <div className="product-list-container">
          {data?.itemCards.map((item) => (
            <ProductList key={item?.card?.info?.id} data={item?.card?.info} />
          ))}
        </div>)}
      </div>
    );
  };

  export default ResturentOptionMenu;