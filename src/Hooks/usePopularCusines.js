import { useEffect, useState } from "react"
import { polularCusines } from "../utils/constant";

const usePopularCusines =()=>{
    const [isPopularCusines,setPopularcusines] = useState([]);
    useEffect(()=>{
        getCusines();
    },[]);

    const getCusines = async ()=>{
        const data = await fetch(polularCusines);
        const ressult = await data.json();
        setPopularcusines(ressult?.data?.cards)
    }
    return isPopularCusines;
}

export default usePopularCusines;