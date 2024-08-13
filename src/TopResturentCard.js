import { PRODUCT_IMAGE, ROUNDED_STAR } from "./utils/constant";

const TopResturentCard = ({ data }) => {
  return (
    <div className="top-resturent-card">
      <img
        className="product-img"
        alt="product-img"
        src={PRODUCT_IMAGE(data?.cloudinaryImageId)}
      ></img>
      <div className="product-details">
        <p className="product-name">{data?.name}</p>
        <div className="rating-container">
          <img
            className="rating-img"
            alt="rounded-star.png"
            src={ROUNDED_STAR}
          />
          <p className="normal-text">
            {data?.avgRatingString} . {data?.sla?.slaString}
          </p>
        </div>
        <p className="normal-text">{data?.cuisines.join(", ")}</p>
        <p className="normal-text">{data?.areaName}</p>
      </div>
    </div>
  );
};

export default TopResturentCard;