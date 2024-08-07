import { useState } from "react";
import { APP_LOGO } from "./utils/constant";

const Header = () => {
  const [isSignIn,setSignIn] = useState(true)
  const [count, setCount] = useState(1);

  const handleCount =()=>{
    setCount(count+1)
    setCount((count)=>count+1);
    console.log(count);
    
  }
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
          </ul>
        </div>
        <button onClick={()=>setSignIn(!isSignIn)} type='button'>{isSignIn === true ? "SignIn" :"SignOut"}</button>
      </div>
    );
  };
export default Header;  