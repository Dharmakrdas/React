import { PRODUCT_IMAGE } from "./utils/constant";

const AppLink = () => {
  return (
    <div className="app-link-container">
      <div className="app-link">
        <p className="bold-heading">
          For better experience,download the Swiggy app now
        </p>
        <div className="app-link-logo">
          <img
            alt="android-logo"
            src={PRODUCT_IMAGE("portal/m/play_store.png")}
          />
          <img alt="ios-logo" src={PRODUCT_IMAGE("portal/m/app_store.png")} />
        </div>
      </div>
    </div>
  );
};

export default AppLink;
