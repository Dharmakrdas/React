const ResturentOffer = ({ data }) => {
    return (
      <div className="offer-items">
        <p className="offer-text-heading">{data?.info?.header}</p>
        <p className="offer-items-text">{data?.info?.expiryTime}</p>
      </div>
    );
  };

  export default ResturentOffer;