import { useState } from "react";
import usePopularCusines from "./Hooks/usePopularCusines";
import MenuWidgetList from "./MenuWidgetList";
import { searchApi } from "./utils/constant";
import SerachProduct from "./SerachProduct";

const Search = () => {
  const cusines = usePopularCusines();
  const [isSearchText, setSearchText] = useState("");
  const [isSearchData, setSearchData] = useState([]);
  // console.log("Polular ", cusines);
  const PopularCusines = cusines[1]?.card?.card;

  const getResturentList = async () => {
    if (isSearchText === "") {
      setSearchData([]);
      return;
    }
    try {
      const data = await fetch(searchApi(isSearchText));
      const response = await data.json();
      {
        response?.data?.suggestions &&
          setSearchData(response?.data?.suggestions);
      }
      // console.log("delay api call", response?.data?.suggestions);
    } catch (err) {
      setSearchData([]);
      console.log(err);
    }
  };

  return (
    <div className="search-main-container">
      <input
        type="text"
        data-testid="search-input"
        value={isSearchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={() => getResturentList(isSearchText)}
        placeholder="Seach for Resturents or food"
        className="seach-input"
      />
      <div className="polular-cusines">
        {PopularCusines && <MenuWidgetList data={PopularCusines} />}

        {isSearchData &&
          isSearchData?.map((item) => (
            <SerachProduct key={item?.text} data={item} />
          ))}
      </div>
    </div>
  );
};

export default Search;
