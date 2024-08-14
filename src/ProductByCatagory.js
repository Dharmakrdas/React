import { json, useParams } from "react-router-dom";
import useTopResturent from "./Hooks/useTopResturent";

const ProductByCatagory = () => {
  const { category } = useParams();
  const res = category;
//   console.log(category);
  const productDetails = useTopResturent(res);
  console.log(productDetails);

  return (
    <div>
      <h1>Product by Catagory</h1>
    </div>
  );
};

export default ProductByCatagory;
