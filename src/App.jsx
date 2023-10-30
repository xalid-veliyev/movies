import { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Trending from "./components/Trends";
import Filter from "./components/Filter"
import Pricing from "./components/Pricing";
import Picture from "./components/Picture";
import PicturePages from "./pages/PicturePages";
import Movieproduction from "./components/Movieproduction";
import Upcoming from "./components/Upcoming";
import Animated from "./components/Animated";
import Pelicula from "./components/Pelicula";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer"
import './Responsive.css';


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/TvShows" element={<TvShows />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/picturepages" element={<PicturePages />} />
      </Routes>
      {pathname !== "/picturepages" && <Picture />}
      
      <Movieproduction/>
      <Upcoming/>
      <Animated/>
      <Pelicula/>
      <Showcase/>
      <Footer/>
    </>
  );
}

export default App;
