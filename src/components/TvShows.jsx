import { Fragment, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import NoImg from "./NoImage.jpg";
import axios from "axios";
import TrailerTvShows from "../Trailers/TrailerTvShows";
import TrailerMovies from "../Trailers/TrailerMovies";
import { connect } from "react-redux";

function TvShows({ searchInput }) {
  const [showData, setShowData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const Shown = searchInput ? "search" : "discover";
  const [title, setTitle] = useState("");
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`;
  const Images = "https://image.tmdb.org/t/p/w500";

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "13ebc25a3ad69ab8f6bc3d464e17d780",
        query: searchInput,
      },
    });
    const results = data.data.results;
    setShowData(results);
  };
  useEffect(() => {
    TvShows();
  }, [searchInput]);

  const [showId, setShowId] = useState(0);
  const toggle = true;
  
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {showData.map((shows) => {
            return (
              <Fragment key={shows.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => setShowId(shows.id)}
                  />
                  <img
                    src={
                      shows.poster_path
                        ? `${Images}${shows.poster_path}`
                        : NoImg
                    }
                    alt=""
                    onClick={() => setShowId(shows.id)}
                  />
                  <h3
                    id={shows.name.length > 28 ? "smaller-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {shows.name}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {showId && <TrailerMovies type="tv" setMovieId={setShowId} id={showId} toggle={toggle} />}

          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            color="#fff"
            cursor={"pointer"}
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  searchInput: state.searchInput,
});

export default connect(mapStateToProps)(TvShows);
