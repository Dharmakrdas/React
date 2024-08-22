import useProductList from "./Hooks/useProductList";
import ShimerResturentCard from "./utils/ShimerResturentCard";
import { useEffect, useState } from "react";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import MenuWidgetList from "./MenuWidgetList";
import TopResturentList from "./TopResturentList";
import OnlineResturent from "./OnlineResturent";
import Footer from "./Footer";
import AppLink from "./AppLink";

const Body = () => {
  const resturentData = useProductList();
  const online = useOnlineStatus();
  const MenuList = resturentData[0]?.card?.card;
  // console.log(MenuList);
  const TopResturent = resturentData[1]?.card?.card;
  const ResturentWithOnline =
    resturentData[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const cities = resturentData[10]?.card?.card?.cities;
  // console.log("Cites",cities);

  // const seachHandle = () => {
  //   const data = [...resturent];
  //   console.log(searchText);

  //   const res = data.filter((item) => item.info.name.includes(searchText));
  //   console.log(res);
  // };
  if (!online)
    return (
      <h1>
        Looks like your connection is offline when you back i will be show your
        detials{" "}
      </h1>
    );
  return resturentData.length === 0 ? (
    <ShimerResturentCard />
  ) : (
    <div className="body-conatiner">
      <div className="main-conatiner">
        {MenuList && <MenuWidgetList data={MenuList} />}
        <div className="break"></div>

        {TopResturent && <TopResturentList data={TopResturent} />}
        <div className="break"></div>

        {ResturentWithOnline && (
          <OnlineResturent
            data={ResturentWithOnline}
            header_txt={resturentData[2]?.card?.card?.title}
          />
        )}
      </div>
      <AppLink />
      <Footer cities={cities} />
    </div>
  );
};

export default Body;
