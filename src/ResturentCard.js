import { PRODUCT_IMAGE, ROUNDED_STAR } from "./utils/constant";

const ResturentCard = ({ data }) => {
  return (
    <div class="resturent-card">
      <img
        class="product-img"
        alt="product-img"
        src={PRODUCT_IMAGE(data?.cloudinaryImageId)}
      ></img>
      <div class="product-details">
        <p class="product-name">{data?.name}</p>
        <div class="rating-container">
          <img class="rating-img" alt="rounded-star.png" src={ROUNDED_STAR} />
          <p>{data?.avgRatingString} . {data?.sla?.slaString}</p>
        </div>
        <p class="normal-text">{data?.cuisines.join(", ")}</p>
        <p class="normal-text">{data?.areaName}</p>
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

