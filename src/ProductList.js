import { PRODUCT_IMAGE, ROUNDED_STAR } from "./utils/constant";

const ProductList = ({ data }) => {
  return (
    <div className="menu-items white-background">
      <div className="product-list-container">
        <p>{data?.name}</p>
        <div>{data?.price / 100} </div>
        <div class="rating-container">
          <img class="rating-img" alt="rounded-star.png" src={ROUNDED_STAR} />
          <p>
            {data?.ratings?.aggregatedRating?.rating} (
            {data?.ratings?.aggregatedRating?.ratingCountV2})
          </p>
        </div>
        <p>{data?.description}</p>
      </div>
      <div className="image-cantainer">
        <img
          alt="product-imag.png"
          className="menu-item-img"
          src={PRODUCT_IMAGE(data?.imageId)}
        ></img>
        <button className="btn" type="button">
          ADD
        </button>
      </div>
      <div className="break"></div>
    </div>
  );
};

export default ProductList;
