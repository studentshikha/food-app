import {APPLOGO_URL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  

  const [btn , setBtn] = useState("Login")
      return (
      <div className="flex">
        <div className= "">
          <img alt="logo"
            className="logo"
            src={APPLOGO_URL}
          />
        </div>
      
        <div className="nav-items">
          <ul color="secondary">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
              </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li >
              <Link to="/cart">Cart</Link>
            </li>
            <button className="login-btn"
            onClick={()=> btn ==="Login"? setBtn("logout") : setBtn("Login")}>{btn}</button>
          </ul>
        </div>
       
      </div>
    );
  };

  export default Header;