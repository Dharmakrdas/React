import ResturentCard from "./ResturentCard";
import useProductList from "./Hooks/useProductList";
import ShimerResturentCard from "./utils/ShimerResturentCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const resturent = useProductList();
  const [searchText, setSearchText] = useState("");
  const [resturentList, setResturentList] = useState(resturent);

  const seachHandle = () => {
    const data = [...resturent];
    console.log(searchText);

    const res = data.filter((item) => item.info.name.includes(searchText));
    console.log(res);
  };

  return resturent.length === 0 ? (
    <ShimerResturentCard />
  ) : (
    <div className="main-conatiner">
      <div className="seach-container">
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
      </div>
      <div className="resturent-cantainer">
        {resturent &&
          resturent.map((item) => (
            <Link key={item?.info?.id} to={"resturent/" + item?.info?.id}>
              <ResturentCard data={item?.info} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
