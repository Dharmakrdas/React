import { PRODUCT_IMAGE } from "./utils/constant";

const ResturentOffer = ({ data }) => {
    return (
      <div className="offer-items">
        <img className="logo" alt="offer-image" src={PRODUCT_IMAGE(data?.info?.offerLogo)}></img>
        <div>
        <p className="heading-text">{data?.info?.header}</p>
        <p className="offer-items-text">{data?.info?.couponCode}</p>
        </div>
       
      </div>
    );
  };

  export default ResturentOffer;