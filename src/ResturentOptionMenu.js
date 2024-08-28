import ProductList from "./ProductList";
import { DOWN_ARROW, UP_ARROW } from "./utils/constant";

const ResturentOptionMenu = ({ data,isShowItems ,setVisible }) => {
// console.log("click item",isShowItems);
const handleCLick=()=>{
  // console.log("click item",isShowItems);

  setVisible();
}
    return (
      <div data-testid='res-menu' className="menu-container">
        <div className="menu-items"  onClick={()=>handleCLick()}>
          <p className="heading-text">
            {data?.title} ({data?.itemCards?.length})
          </p>
          <img
         
            alt="down-arrow.png"
            src={ isShowItems ? DOWN_ARROW : UP_ARROW}
            className="down-arrow"
          ></img>
        </div>
       {isShowItems === true && ( <div className="product-list-container">
          {data?.itemCards.map((item) => (
            <ProductList key={item?.card?.info?.id} data={item?.card?.info} />
          ))}
        </div>)}
      </div>
    );
  };

  export default ResturentOptionMenu;