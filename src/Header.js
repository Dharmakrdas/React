import { useEffect, useState } from "react";
import { APP_LOGO } from "./utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [count, setCount] = useState(1);
  /**
   * 1 > after initial render useEffect will call
   * 2 > if depencandy is not their inside useEffect then it call every render
   * 3 > if arr dependancy have passed same argument then if argument property changed then useEffect will call
   *     if depandency not changed on that time it will call on initial render.
   */
  useEffect(() => {
    console.log("Use effect called");
  }, []);
  const handleCount = () => {
    setCount(count + 1);
    setCount((count) => count + 1);
    console.log(count);
  };
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} alt="logo.png"></img>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <Link to={"/"}> Home</Link>
          </li>
          <li>Cart</li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <button onClick={() => setSignIn(!isSignIn)} type="button">
              {isSignIn === true ? "SignIn" : "SignOut"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
