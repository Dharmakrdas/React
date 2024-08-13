import { PRODUCT_IMAGE } from "./utils/constant";

const MenuWidgetList = ({ data }) => {
  return (
    <div className="resturent-widget-container">
      <p className="bold-heading">{data?.header?.title}</p>
      <div className="offer-container">
        {data?.imageGridCards?.info.map((item) => (
          <div key={item?.id}>
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
