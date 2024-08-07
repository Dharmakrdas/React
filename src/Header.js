import { APP_LOGO } from "./utils/constant";

const Header = () => {
    return (
      <div className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src={APP_LOGO}
            alt="logo.png"
          ></img>
        </div>
        <div className="nav-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
            <li>SigIn</li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;  