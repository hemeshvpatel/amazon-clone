import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ cart }] = useStateValue();

  console.log("Current Cart: ", cart);

  return (
    //   change div to nav for html5
    <nav className="header">
      {/* {logo on the left -> img} */}

      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        ></img>
      </Link>

      {/* {Search box} */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* {3 Links} */}
      <div className="header__nav">
        {/* {1st Link} */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* {2nd Link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* {3rd Link} */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* {4th Link} */}
        <Link to="/checkout">
          <div className="header__optionCart">
            {/* {shopping cart icon} */}
            <ShoppingCartIcon />
            {/* {number of items in the basket} */}
            <span className="header__cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>

      {/* {Basket icon with number} */}
    </nav>
  );
}

export default Header;
