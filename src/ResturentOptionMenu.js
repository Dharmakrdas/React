import ProductList from "./ProductList";
import { DOWN_ARROW } from "./utils/constant";

const ResturentOptionMenu = ({ data }) => {
    return (
      <div className="menu-container">
        <div className="menu-items">
          <p className="heading-text">
            {data?.title} ({data?.itemCards?.length})
          </p>
          <img
            alt="down-arrow.png"
            src={DOWN_ARROW}
            className="down-arrow"
          ></img>
        </div>
        <div className="product-list-container">
          {data?.itemCards.map((item) => (
            <ProductList data={item?.card?.info} />
          ))}
        </div>
      </div>
    );
  };

  export default ResturentOptionMenu;