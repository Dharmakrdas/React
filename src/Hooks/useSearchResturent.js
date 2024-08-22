import { useEffect, useState } from "react";
import { searchApi } from "../utils/constant";

const useSearchResturent = (text) => {
  const [isSearchData, setSearchData] = useState([]);
  useEffect(() => {
    getResturentList();
  }, []);

  const getResturentList = async () => {
    const data = await fetch(searchApi("megna"));
    const response = await data.json();
    setSearchData(response);
  };
  return isSearchData;
};

export default useSearchResturent;


