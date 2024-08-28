import { json, useLocation } from "react-router-dom";
import useTopResturent from "./Hooks/useTopResturent";

const ProductByCatagory = () => {
  const { state } = useLocation();
  const res = state;
  console.log(res.length);
  
  mystring = res.slice(36,41);

  console.log(mystring);
  // const productDetails = useTopResturent(res);
  // console.log(productDetails);

  return (
    <div>
      <h1>Product by Catagory coming soon...! </h1>
    </div>
  );
};

export default ProductByCatagory;
