import React, { useEffect } from "react";
import "./Browse.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Browse = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: "ease-in-out", // Тип easing
      once: true, // Анимация только один раз
    });
  }, []);

  return (
    <>
      <section className="browse">
        <div className="container">
          <div className="browse__wrapp">
            <h1 className="browse__text" data-aos="fade-up">
              BROWSE BY DRESS STYLE
            </h1>
            <div className="browse__wrapper">
              <div
                className="browse__item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Casual</h3>
              </div>
              <div
                className="browse__item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Formal</h3>
              </div>
              <div
                className="browse__item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Party</h3>
              </div>
              <div
                className="browse__item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
