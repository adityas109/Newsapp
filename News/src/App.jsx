import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeButton from "./components/ThemeButton";
import { WeatherProvider } from "./providers/weather/WeatherContext";
import { NewsProvider } from "./providers/news/NewsContext";

const App = () => {
  return (
    <NewsProvider>


      <WeatherProvider>
        <Navbar />
        <Home />
        <ThemeButton />


      </WeatherProvider>

      
    </NewsProvider>
  );
};

export default App;
