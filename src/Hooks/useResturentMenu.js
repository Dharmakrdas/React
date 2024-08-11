import { useEffect, useState } from "react";
import { PRODUCT_DETAILS_API } from "../utils/constant";

const useResturentMenu =(resid)=>{
    const [resurent, setResturent] = useState([]);

    useEffect(() => {
        getResturentDetails(resid);
      }, []);
    
      const getResturentDetails = async (resid) => {
        const data = await fetch(PRODUCT_DETAILS_API(resid));
        const result = await data.json();
        // console.log(result);
        setResturent(result?.data?.cards);
      };
      return resurent;
}

export default useResturentMenu;