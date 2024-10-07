import React, { useContext, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import NewsContext from "../providers/news/NewsContext";
import { fetchNews } from "../providers/news/NewsAction";

const Navbar = () => {
  const { dark } = useContext(ThemeContext);
  const { dispatch } = useContext(NewsContext);

  const [topic, setTopic] = useState("");

  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(topic);
  };

  return (
    <nav
      className={
        dark
          ? "navbar navbar-expand-lg bg-dark shadow-lg"
          : "navbar navbar-expand-lg bg-light shadow-lg"
      }
    >
      <div className="container-fluid">
        <a
          className={dark ? "navbar-brand text-light" : "navbar-brand"}
          href="#"
        >
          Kal Tak
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("Indian Politics")}
              >
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("Bollywood")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  dark ? "nav-link active text-light" : "nav-link active"
                }
                aria-current="page"
                href="#"
                onClick={() => getNews("International News")}
              >
                International
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setTopic(e.target.value)}
            />
            <button
              className={dark ? "btn btn-danger" : "btn btn-warning"}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
