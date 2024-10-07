import React, { useContext } from "react";
import NewsContext from "../providers/news/NewsContext";

const NewsSlider = () => {
  const { newsData } = useContext(NewsContext);

  if (!newsData) {
    return (
      <h1 className="my-3 text-secondary display-3 text-center">प्रतीक्षा करे</h1>
    );
  }

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide my-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {newsData.map((news, index) => {
          return (
            <div
              key={index}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
            >
              <img
                id="sliderImage"
                src={
                  news.urlToImage ||
                  "https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif?cid=6c09b952bcvo0ldn3fy81net46hxkeiota6q3k0sj4dbnsfu&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
                }
                className="d-block w-100"
                alt="..."
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default NewsSlider;
