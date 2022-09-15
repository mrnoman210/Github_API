import React, { useEffect } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const handleClick = () => {
    setShowSearch((current) => !current);
  };
  // const changeSearch = (e) => {
  //   e.target.value;
  // };
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>N</span>oman
            <span>A</span>hmed
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/shop">Shop</NavLink>
            </li> */}
            <li>
              <div class="dropdown">
                <div class="dropbtn">Pages</div>
                <div class="dropdown-content">
                  <Link to={"/signup"}>Sign UP</Link>
                  <Link to={"/login"}>Log In</Link>
                  {/* <Link to={"#"}>Link 3</Link> */}
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>{" "}
          </ul>
        </div>

        {/* 3rd social media links */}
        <NavLink to="/search">
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <FaSearch
                  className="searcharea"
                  // onClick={handleClick}
                />
              </li>
            </ul>
          </div>
        </NavLink>
        <div className="hamburger-menu">
          <GiHamburgerMenu onClick={() => setShowMediaIcons(!showMediaIcons)} />
        </div>
      </nav>
      {/* <input
        type={"text"}
        className={showSearch ? "inputField" : "none"}
        placeholder={"Search"}

      /> */}
    </>
  );
}

export default Header;
