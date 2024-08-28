import { Link, useNavigate } from "react-router-dom";
import { PRODUCT_IMAGE } from "./utils/constant";

const MenuWidgetList = ({ data }) => {
  const navigate = useNavigate();
  const {title} = data?.header
  return (
    <div className="resturent-widget-container">
      <p className="bold-heading">{title}</p>
      <div className="offer-container">
        {data?.imageGridCards?.info.map((item) => (
          <div onClick={()=>navigate("/productlist/", {state :item?.entityId })} key={item?.id} data-testid="menu-img">
            <img
              alt="widget-img.png"
              className="widget-img"
              src={PRODUCT_IMAGE(item?.imageId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuWidgetList;
