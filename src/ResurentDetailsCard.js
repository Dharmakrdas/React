import { ROUNDED_STAR } from "./utils/constant";

const ResturentDetailsCard = ({ resturentCard }) => {
    return (
      <div className="resturent-details-container">
        <div className="border">
        <div className="rating-container">
          <img className="rating-img" alt="rounded-star.png" src={ROUNDED_STAR} />
          <p className="resturent-text">
            {resturentCard?.avgRatingString}({resturentCard?.totalRatingsString}
            ) . {resturentCard?.costForTwoMessage}
          </p>
        </div>
        <p className="cuisines-text">{resturentCard?.cuisines.join(", ")}</p>
        <p className="resturent-text">
          Outlet <p>{resturentCard?.areaName}</p>
        </p>
        <p className="resturent-text">
          {resturentCard?.sla?.minDeliveryTime}-
          {resturentCard?.sla?.maxDeliveryTime} mins
        </p>
        <p className="normal-text">{resturentCard?.feeDetails?.message}</p>
      </div>
      </div>
    );
  };

  export default ResturentDetailsCard;