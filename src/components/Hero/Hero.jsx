import React, { useEffect } from "react";
import "./Hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: "ease-in-out", // Тип easing
      once: true, // Анимация только один раз
    });
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div
            className="hero__box"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 data-aos="fade-down" data-aos-delay="400">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p data-aos="fade-down" data-aos-delay="600">
              Browse through our diverse range of meticulously crafted garments, 
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button data-aos="zoom-in" data-aos-delay="800">Shop Now</button>
            <div className="hero__inner">
              <div data-aos="fade-up" data-aos-delay="1000">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="1200">
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="1400">
                <h3>30,000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <img
            src="./hero-img.png"
            alt="Hero"
            data-aos="fade-left"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
