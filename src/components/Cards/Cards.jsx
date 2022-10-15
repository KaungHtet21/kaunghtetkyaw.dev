import React from "react";
import "./Cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { articles } from "./Articles";
import { useNavigate } from "react-router-dom";

function Testimonials() {
  const navigate = useNavigate();

  return (
    <div className="c-wrapper">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {articles.map((article) => {
          return (
            <SwiperSlide key={article.id}>
              <div
                className="card"
                onClick={() =>
                  navigate(`articles/${article.path_suffix}`, {
                    state: {
                      title: article.title,
                      bg_image: article.bg_image,
                      genre: article.genre,
                      date: article.date,
                    },
                  })
                }
              >
                <span>{article.title}</span>
                <span>{article.subtitle}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
