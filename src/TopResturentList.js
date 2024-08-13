import { Link } from "react-router-dom";
import TopResturentCard from "./TopResturentCard";

const TopResturentList = ({ data }) => {
    // console.log("Top",data);
    
  return (
    <div className="top-resturent-container">
      <p className="bold-heading">{data?.header?.title}</p>
      <div className="offer-container">
        {data?.gridElements?.infoWithStyle?.restaurants.map((item) => (
          <div key={item?.info?.id}>
            <Link key={item?.info?.id} to={"resturent/" + item?.info?.id}>
              <TopResturentCard data={item?.info} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopResturentList;
