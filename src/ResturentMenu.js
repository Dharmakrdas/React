import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCT_DETAILS_API } from "./utils/constant";
import ResturentDetailsCard from "./ResurentDetailsCard";
import ResturentOffer from "./ResturentOffer";

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
  const ResturentOptionMenu = ({ data }) => {
    return (
      <div className="menu-container">
        <p className="offer-text-heading">{data?.title}({data?.itemCards?.length})</p>
      </div>
    );
  };
  return (
    <div>
      <h1>{resurent[2]?.card?.card?.info?.name}</h1>
      <ResturentDetailsCard resturentCard={resurent[2]?.card?.card?.info} />
      <h1>Deals for you</h1>
      <div className="offer-container">
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
