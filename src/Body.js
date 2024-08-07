import ResturentCard from "./ResturentCard";
import useProductList from "./Hooks/useProductList";
import ShimerResturentCard from "./utils/ShimerResturentCard";

const Body = () => {
  const resturent = useProductList();

  return  resturent.length ===0 ? <ShimerResturentCard /> : (
    <div className="main-conatiner">
      <div className="seach-container">
        <input
          className="seach-input"
          type="text"
          placeholder="Seach Product"
        ></input>
      </div>
      <div className="resturent-cantainer">
        {resturent &&
          resturent.map((item) =><ResturentCard key={item?.info?.id} data={item?.info} />)}
      </div>
    </div>
  );
};

export default Body;
