import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResturentDetailsCard from "./ResurentDetailsCard";
import ResturentOffer from "./ResturentOffer";
import ResturentOptionMenu from "./ResturentOptionMenu";
import ShimemerProductDetails from "./Shimmer/ShimerProductDetails";
import useResturentMenu from "./Hooks/useResturentMenu";

const ResturentMenu = () => {
  const [isVisible,setVisible] = useState(true);
  const { resid } = useParams();
  const resurent = useResturentMenu(resid);


  const handleClick=(id)=>{
console.log("item click", id);
// const data = [...resurent];
// const result = resurent[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((item,index)=> index === id)
// result[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.isVisible = !isVisible
// setResturent(data);

  }

  return resurent.length === 0 ? <ShimemerProductDetails /> : (
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
      {resurent[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((item,index) =>
        item?.card?.card?.itemCards != undefined ? (
          <ResturentOptionMenu
            key={item?.card?.card?.title}
            data={item?.card?.card}
            isVisible={isVisible}
            setVisible={handleClick}
            index={index}
          />
        ) : null
      )}
    </div>
  );
};

export default ResturentMenu;
