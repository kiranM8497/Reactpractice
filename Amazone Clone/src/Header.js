import React from "react";
import "./Header.css";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import amazonlogo from "./img/amazonlogo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignInSignout = () => {
    
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={amazonlogo} alt="amazon-logo" />
      </Link>

      {/* <a href="/home">
        <img className="header-logo" src={amazonlogo} alt="amazon-logo" />
      </a> */}

      <div className="header-search">
        <input type="text" className="header-searchInput"></input>
        <SearchIcon className="header-search-icon" />

        {/* logo */}
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleSignInSignout}  className="header-option">
            <span className="header-optionLineOne">Hello {!user? 'Guest' : user.email}</span>
            <span className="header-optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo"> & Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne"> Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        {/* <a className="header-optionBasket" href="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">

              {basket?.length}

            </span>
          </div>
        </a> */}

        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
