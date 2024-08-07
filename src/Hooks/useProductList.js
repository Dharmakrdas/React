import { useEffect, useState } from "react"
import { BASE_API_URL } from "../utils/constant";

const useProductList =()=>{
    const [resturentList,setResturentList] = useState([]);

    // let arr = useState([])
    // let [resturentList,setResturentList] = arr
    // let resturentList = arr[0];
    // let setResturentList = arr[1]
    useEffect(() => {
        getResturentAPI();
      }, []);
    
      const getResturentAPI = async () => {
        const result = await fetch(BASE_API_URL);
        const resultResponse = await result.json();
        const data =
          resultResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setResturentList(data);
        // console.log(data);
      };
      return resturentList.length > 0 ? resturentList : []
}

export default useProductList;