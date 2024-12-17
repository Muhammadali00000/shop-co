import React, { useEffect } from "react";
import "./Category.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // Импортируем стили AOS
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import Btn from "../Btn/Btn";
import Products from "/public/products.json";
import { Link } from "react-router-dom";

const Category = () => {
  useEffect(() => {
    // Инициализация AOS
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: "ease-in-out", // Тип easing
      once: true, // Анимация срабатывает только один раз
    });
  }, []);

  return (
    <>
      <section className="category">
        <div className="container">
          <div id="ARRIVALS">
            <SectionTitle position="center" data-aos="fade-up">
              NEW ARRIVALS
            </SectionTitle>
          </div>

          <div className="category__wrapper">
            {Products.slice(0, 4).map((card, i) => (
              <Link
                to={`/product/${card.id}`}
                key={i}
                className="category__card"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100} // Добавляем задержку для плавной последовательности
              >
                <Card
                  image={card.image}
                  name={card.name}
                  rate="4.0"
                  price={card.price}
                  stars="⭐⭐⭐⭐"
                />
              </Link>
            ))}
          </div>
          <Btn data-aos="fade-up" data-aos-delay="500">View All</Btn>
        </div>

        <div className="container">
          <div id="selling">
            <SectionTitle position="center" data-aos="fade-up">
              TOP SELLING
            </SectionTitle>
          </div>

          <div className="category__wrapper">
            {Products.slice(4, 8).map((card, i) => (
              <Link
                to={`/product/${card.id}`}
                key={i}
                className="category__card"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100} // Добавляем задержку для плавной последовательности
              >
                <Card
                  image={card.image}
                  name={card.name}
                  rate="4.0"
                  price={card.price}
                  stars="⭐⭐⭐⭐"
                />
              </Link>
            ))}
          </div>

          <Btn data-aos="fade-up" data-aos-delay="500">View All</Btn>
        </div>
      </section>
    </>
  );
};

export default Category;
