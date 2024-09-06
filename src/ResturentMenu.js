import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResturentDetailsCard from "./ResurentDetailsCard";
import ResturentOffer from "./ResturentOffer";
import ResturentOptionMenu from "./ResturentOptionMenu";
import ShimemerProductDetails from "./Shimmer/ShimerProductDetails";
import useResturentMenu from "./Hooks/useResturentMenu";
import TextInput from "./component/TextInput";

const ResturentMenu = () => {
  const [isVisible, setVisible] = useState(null);
  const { resid } = useParams();
  const resurent = useResturentMenu(resid);

  const ResturntMenu =
    resurent[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("filter Item", ResturntMenu);
  // console.log("resturent menu",resurent);

  const handleClick = (id) => {
    console.log("item click", id);
    setVisible(id);
  };

  return resurent.length === 0 ? (
    <ShimemerProductDetails />
  ) : (
    <div className="resturnt-menu-container">
      <p className="heading-text bold-heading">{resurent[2]?.card?.card?.info?.name}</p>
      <ResturentDetailsCard resturentCard={resurent[2]?.card?.card?.info} />
      <p className="heading-text bold-heading">Deals for you</p>
      <div className="offer-container">
        {resurent[3]?.card?.card?.gridElements?.infoWithStyle?.offers.map(
          (item) => (
            <ResturentOffer key={item?.info?.offerIds[0]} data={item} />
          )
        )}
      </div>
      <div className="break"></div>
      <div className="grey">
        <TextInput />
      {ResturntMenu.map((item, index) => (
        <ResturentOptionMenu
          key={item?.card?.card?.title}
          data={item?.card?.card}
          isShowItems={index === isVisible ? true : false}
          setVisible={() => handleClick(index)}
          index={index}
        />
      ))}
      </div>
    </div>
  );
};

export default ResturentMenu;
