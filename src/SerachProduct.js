import { PRODUCT_IMAGE } from "./utils/constant";

const SerachProduct = ({ data }) => {
  return (
    <div data-testid='search-item' className="seach-product-container">
        <div className="seach-image-container">
      <img alt="product img" src={PRODUCT_IMAGE(data?.cloudinaryId)} />
      </div>
      <div>
        <p>{data?.text}</p>
        <p className="seach-type-text">{data?.subCategory}</p>
      </div>
    </div>
  );
};

export default SerachProduct;
