import { useEffect, useState } from "react"
import { BASE_API_URL, PRODUCT_DETAILS_API, TOPRESTURENTAPI } from "../utils/constant";
import { useParams } from "react-router-dom";

const useTopResturent =(resMenu)=>{
    const [resturentList,setResturentList] = useState([]);
    console.log(resMenu);
    
    useEffect(() => {
        getResturentAPI();
      }, []);
    
      const getResturentAPI = async () => {
        console.log("Fetch Url >>>", (resMenu));
        
        const result = await fetch(resMenu);
        const resultResponse = await result.json();
        const data =
          resultResponse?.data?.cards;
        setResturentList(data);
        // console.log(data);
      };
      return resturentList 
}

export default useTopResturent;