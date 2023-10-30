import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function TrailerMovies({ id, toggle, setMovieId, type }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=13ebc25a3ad69ab8f6bc3d464e17d780&language=en-US`
    )
      .then((a) => a.json())
      .then((a) => {
        setData(a);
        setLoading(false);
      });
  }, [id]);
  return (
    <motion.section
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="player__modal"
      onClick={() => setMovieId(0)}
    >
      {!loading ? (
        data.results.length ? (
          <motion.div
            inital={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            className="player"
          >
            <h1
              id={toggle ? "TrailerMovie-name-dark" : "TrailerMovie-name-light"}
            >
              {data.results[0].name}
            </h1>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${data.results[0].key}`}
              title="Footballers Who Have Been In Prison. FC JAIL ⛓"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        ) : (
          <h1>Trailer yoxdur</h1>
        )
      ) : (
        <h1>Loading</h1>
      )}
    </motion.section>
  );
}
export default TrailerMovies;
