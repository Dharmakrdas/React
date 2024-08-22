import { Oval } from "react-loader-spinner";

const ShimerCard = () => {
  return (
    <div className="shimer-card">
      <div className="shimer-img"></div>
      <div className="shimer-text"></div>
      <div className="shimer-text"></div>
      <div className="shimer-text"></div>
      <div className="shimer-text"></div>
    </div>
  );
};
const ShimerResturentCard = () => {
  return (
    <div className="main-shimer-container">
      <div className="looking-shimer">
        <div className="loder">
        <Oval
          visible={true}
          height="60"
          width="60"
          color="#ffffff"
          secondaryColor="#fdfdfd"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h1 className=" bold-heading looking-text">
          Looking for great food near you
        </h1>
        </div>
      </div>

      <div className="shimer-container">
        <ShimerCard />
        <ShimerCard />
        <ShimerCard />
        <ShimerCard />
      </div>
    </div>
  );
};

export default ShimerResturentCard;
