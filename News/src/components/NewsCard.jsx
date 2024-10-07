import React, { useContext } from "react";
import ThemeContext from "../providers/theme/ThemeContext";

const NewsCard = ({ news }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={dark ? "card mb-3 p-2 bg-dark text-light" : "card mb-3 p-2"}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={
              news.urlToImage ||
              "https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif?cid=6c09b952bcvo0ldn3fy81net46hxkeiota6q3k0sj4dbnsfu&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
            }
            className="img-fluid"
            style={{
              height: "250px",
            }}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small className="text-secondary">
                {new Date(news.publishedAt).toDateString("en-IN")}
              </small>
              <br />
              <small className="text-secondary">Source : {news.author}</small>
            </p>
            <a
              target="_blank"
              href={news.url}
              className={
                dark
                  ? "btn btn-secondary float-end"
                  : "btn btn-primary float-end"
              }
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
