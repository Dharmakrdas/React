import { useContext } from "react";
import { PRODUCT_IMAGE, ROUNDED_STAR } from "./utils/constant";
import UserContext from "./utils/UserContext";

const ResturentCard = ({ data }) => {
  const {loginUser} = useContext(UserContext);
  return (
    <div className="resturent-card">
      <img
        className="product-img"
        alt="product-img"
        src={PRODUCT_IMAGE(data?.cloudinaryImageId)}
      ></img>
      <div className="product-details">
        <p className="product-name">{data?.name}</p>
        <div className="rating-container">
          <img className="rating-img" alt="rounded-star.png" src={ROUNDED_STAR} />
          <p>{data?.avgRatingString} . {data?.sla?.slaString}</p>
        </div>
        <p className="normal-text">{data?.cuisines.join(", ")}</p>
        <p className="normal-text">{data?.areaName}</p>
        <p className="normal-text">{loginUser}</p>
      </div>
    </div>
  );
};

export const peopleChoice =(ResturentCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="recomended-label">People Choice</label>
        <ResturentCard {...props} />
      </div>
    )
  }
}
export default ResturentCard;

