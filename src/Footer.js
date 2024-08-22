import { useState } from "react";

const Footer = ({ cities }) => {
  const sortCity = cities?.slice(0, 6);
  const [isHide, setHide] = useState(false);
  // console.log("cities cities",sortCity,cities);

  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div>
          <p className="footer-heading">Swigy</p>
          <p className="fotter-normal-text">Bundli technology pvt ltd</p>
        </div>
        <div>
          <p className="footer-heading">Company</p>
          <p className="fotter-normal-text">About</p>
          <p className="fotter-normal-text">Carrer</p>
          <p className="fotter-normal-text">Team</p>
          <p className="fotter-normal-text">Swigy One</p>
          <p className="fotter-normal-text">Swigy Instamart</p>
          <p className="fotter-normal-text">Swigy Geniue</p>
        </div>

        <div>
          <div>
            <p className="footer-heading">Contact us</p>
            <p className="fotter-normal-text">Help & Support</p>
            <p className="fotter-normal-text">Partner with us</p>
            <p className="fotter-normal-text">Ride with us</p>
          </div>
          <div>
            <p className="footer-heading">legal</p>
            <p className="fotter-normal-text">Terms & Condition</p>
            <p className="fotter-normal-text">Cookie & Policy</p>
            <p className="fotter-normal-text">Privacy & Policy</p>
            <p className="fotter-normal-text">Investor Relation</p>
          </div>
        </div>
        <div>
          <p className="footer-heading">We Deliverd to:</p>
          {sortCity &&
            sortCity.map((city) => (
              <p key={city?.text} className="fotter-normal-text">
                {city?.text}
              </p>
            ))}
          {sortCity && (
            <p onClick={() => setHide(!isHide)} className="fotter-normal-text">
              {cities.length - sortCity.length}
              {"cities >"}
            </p>
          )}
        </div>
      </div>
      {isHide && (
        <p className="footer-heading-other">
          Other City that we have delivered:
        </p>
      )}
      <div className="footer-othercity">
        {isHide &&
          cities.slice(6).map((city) => (
            <p key={city?.text} className="fotter-normal-text">
              {city?.text}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Footer;
