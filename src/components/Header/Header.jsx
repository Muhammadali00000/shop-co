import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const { isActive, toggleBurger, user, isAuth, logout } = useAppContext();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации (в миллисекундах)
      easing: "ease-in-out", // Тип easing
      once: true, // Анимация выполняется только один раз
    });
  }, []);

  return (
    <header className="header" data-aos="fade-down">
      <div className="container" data-aos="fade-up">
        <div className="header__wrapper" data-aos="zoom-in">
          <Link to={"/"} className="logo" data-aos="fade-right">
            SHOP.CO
          </Link>

          <div className={`header__menu ${isActive ? "active" : ""}`}>
            <Link
              to={"/sale"}
              className="dropdown"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Shop
              <img
                src="https://www.clipartmax.com/png/small/53-533202_no-minimum-online-catalog-art-approval-icon-arrow-down-svg.png"
                alt=""
                data-aos="fade-up"
              />
              <div>
                <Link to={"/"} data-aos="fade-right" data-aos-delay="300">
                  Man
                </Link>
                <Link to={"/"} data-aos="fade-right" data-aos-delay="400">
                  Women
                </Link>
                <Link to={"/"} data-aos="fade-right" data-aos-delay="500">
                  Kids
                </Link>
              </div>
            </Link>
            <a href="/#selling" data-aos="fade-left" data-aos-delay="600">
              On Sale
            </a>
            <a href="/#ARRIVALS" data-aos="fade-left" data-aos-delay="700">
              New Arrivals
            </a>
            <Link to={"/"} data-aos="fade-left" data-aos-delay="800">
              Brands
            </Link>
          </div>

          <input
            className="search"
            type="text"
            placeholder="🔍  Search for products..."
            data-aos="zoom-in"
            data-aos-delay="900"
          />

          <div className="icon" data-aos="fade-left" data-aos-delay="1000">
            <Link to={"/Basket"}>
              <img src="./icon-1.svg" alt="" />
            </Link>

            {isAuth ? (
              <div>
                <b>{user.username}</b> <br />
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
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
