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
          <p>4.3 . 20-25 mins</p>
        </div>
        <p class="normal-text">{data?.cuisines.join(", ")}</p>
        <p class="normal-text">{data?.areaName}</p>
      </div>
    </div>
  );
};

export default ResturentCard;

{
  /* <div class="resturent-card">
<img class="product-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8" alt="product-image">
<div class="product-details">
    <p class="product-name">Domino's Pizza</p>
    <div class="rating-container">
        <img class="rating-img" alt="rounded-star.png" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Featured_Star_green.svg/1200px-Featured_Star_green.svg.png">
        <p>4.3 . 20-25 mins</p>
        </div><p class="normal-text">Pizzas, Italian, Pastas, Desserts</p>
        <p class="normal-text">Richmond Town</p>
        </div>
        </div> */
}
