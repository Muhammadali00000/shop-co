import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context";

const Header = () => {
  const { isActive, toggleBurger, user, isAuth, logout } = useAppContext();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link to={"/"} className="logo">
              SHOP.CO
            </Link>

            <div className={`header__menu ${isActive ? "active" : ""}`}>
              <Link to={"/sale"} className="dropdown">
                Shop
                <img
                  src="https://www.clipartmax.com/png/small/53-533202_no-minimum-online-catalog-art-approval-icon-arrow-down-svg.png"
                  alt=""
                />
                <div>
                  <Link to={"/"}>Man</Link>
                  <Link to={"/"}>Women</Link>
                  <Link to={"/"}>Kids</Link>
                </div>
              </Link>
              <a href="/#selling">On Sale</a>
              <a href="/#ARRIVALS">New Arrivals</a>
              <Link to={"/"}>Brands</Link>
            </div>

            <input
              className="search"
              type="text"
              placeholder="🔍  Search for products..."
            />

            <div className="icon">
              <Link to={"/Basket"}>
              <img src="./icon-1.svg" alt="" />
              </Link>

              {isAuth ? (
                <div>
                    <b>{user.username}</b>  <br />
                    <button onClick={logout}>Выйти</button>
                </div>
              ) : (
                <Link to={"/login"}>
                  <img src="./icon-2.svg" alt="" />
                </Link>
              )}
            </div>

            <div
              onClick={toggleBurger}
              className={`burger ${isActive ? "active" : ""}`}
            >
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
