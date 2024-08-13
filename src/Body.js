import useProductList from "./Hooks/useProductList";
import ShimerResturentCard from "./utils/ShimerResturentCard";
import { useEffect, useState } from "react";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import MenuWidgetList from "./MenuWidgetList";
import TopResturentList from "./TopResturentList";
import OnlineResturent from "./OnlineResturent";

const Body = () => {
  const resturentData = useProductList();

  const [searchText, setSearchText] = useState("");
  const online = useOnlineStatus();
  const MenuList = resturentData[0]?.card?.card;
  // console.log(MenuList);

  const ResturentWithOnline =
    resturentData[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const TopResturent = resturentData[1]?.card?.card;

  const seachHandle = () => {
    const data = [...resturent];
    console.log(searchText);

    const res = data.filter((item) => item.info.name.includes(searchText));
    console.log(res);
  };
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
    <div className="main-conatiner">
      {/* <div className="seach-container">
        <input
          className="seach-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Seach Product"
        ></input>
        <button name="Seach" type="button" onClick={() => seachHandle()}>
          Seach
        </button>
      </div> */}

      {MenuList && <MenuWidgetList data={MenuList} />}
      <div className="break"></div>

      {TopResturent && <TopResturentList data={TopResturent} />}
      <div className="break"></div>

     {ResturentWithOnline && <OnlineResturent data={ResturentWithOnline}  />}
    </div>
  );
};

export default Body;
