import { useContext, useEffect, useState } from "react";
import { APP_LOGO } from "./utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [count, setCount] = useState(1);
  const cartItems = useSelector((state) => state.cart.items);
  // console.log("cart items", cartItems);

  const { loginUser } = useContext(UserContext);
  const online = useOnlineStatus();
  /**
   * 1 > after initial render useEffect will call
   * 2 > if depencandy is not their inside useEffect then it call every render
   * 3 > if arr dependancy have passed same argument then if argument property changed then useEffect will call
   *     if depandency not changed on that time it will call on initial render.
   */
  useEffect(() => {
    // console.log("Use effect called");
  }, []);
  // const handleCount = () => {
  //   setCount(count + 1);
  //   setCount((count) => count + 1);
  //   console.log(count);
  // };
  return (
    <header className="header-container header" id="myHeader">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} alt="logo.png"></img>
      </div>
      <div className="nav-container">
        <ul className="nav-items no-bullets">
          <li>
            <Link to={"/"}>Swigy Corporate</Link>
          </li>
          <li> <Link to={"/search"}>Search</Link> </li>
          <li>
            {" "}
            <Link to={"/about"}>Offer</Link>
          </li>
          <li>
            <Link to={"/contact"}>Help</Link>
          </li>
          {/* <li>  <Link>{online ? "online":"offline"}</Link></li> */}
          <li>
            <button onClick={() => setSignIn(!isSignIn)} type="button">
              {isSignIn === true ? "SignIn" : "SignOut"}
            </button>
          </li>
          <li>
            <Link to={"/cart"}>
            <div className="menu-items">
              {cartItems.length === 0 ? null : (
                <div className="cart-items">{cartItems.length}</div>
              )}
              {"Cart"}
            </div>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
