import {APPLOGO_URL} from "../utils/constant";
import { useState } from "react";

const Header = () => {
  

  const [btn , setBtn] = useState("Login")
      return (
      <div className="header">
        <div className="logo-container">
          <img alt="logo"
            className="logo"
            src={APPLOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn"
            onClick={()=> btn=="Login"? setBtn("logout") : setBtn("Login")}>{btn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;