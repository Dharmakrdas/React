import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DOWN_ARROW,
  PRODUCT_DETAILS_API,
  PRODUCT_IMAGE,
} from "./utils/constant";
import ResturentDetailsCard from "./ResurentDetailsCard";
import ResturentOffer from "./ResturentOffer";
import ResturentOptionMenu from "./ResturentOptionMenu";

const ResturentMenu = () => {
  const [resurent, setResturent] = useState("");
  const { resid } = useParams();
  useEffect(() => {
    getResturentDetails();
  }, []);

  const getResturentDetails = async () => {
    const data = await fetch(PRODUCT_DETAILS_API(resid));
    const result = await data.json();
    // console.log(result);
    setResturent(result?.data?.cards);
  };

  return (
    <div className="resturnt-menu-container">
      <p className="heading-text">{resurent[2]?.card?.card?.info?.name}</p>
      <ResturentDetailsCard resturentCard={resurent[2]?.card?.card?.info} />
      <p className="heading-text">Deals for you</p>
      <div className="offer-container white-background">
        {resurent[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
          (item) => (
            <ResturentOffer key={item?.info?.header} data={item} />
          )
        )}
      </div>
      {resurent[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((item) =>
        item?.card?.card?.itemCards != undefined ? (
          <ResturentOptionMenu
            key={item?.card?.card?.title}
            data={item?.card?.card}
          />
        ) : null
      )}
    </div>
  );
};

export default ResturentMenu;
