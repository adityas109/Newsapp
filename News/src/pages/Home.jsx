import React, { useContext, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import NewsCard from "../components/NewsCard";
import ThemeContext from "../providers/theme/ThemeContext";
import NewsContext from "../providers/news/NewsContext";
import { fetchNews } from "../providers/news/NewsAction";
import NewsSlider from "../components/NewsSlider";

const Home = () => {
  const { dark } = useContext(ThemeContext);
  const { newsData, dispatch } = useContext(NewsContext);

  // Get News
  const getNews = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews("Indore");
  }, []);

  return (
    <div
      id="container"
      className={
        dark ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"
      }
    >
      <NewsSlider />

      <h1 className="text-center">ताज़ा खबर</h1>

      <div className="row g-3 mt-3">
        <WeatherCard />
        <div className="col-sm-12 col-md-8">
          {!newsData ? (
            <>
              <h1 className="text-center display-5 text-secondary">
              प्रतीक्षा करे
              </h1>
            </>
          ) : (
            newsData.map((news, index) => <NewsCard key={index} news={news} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
