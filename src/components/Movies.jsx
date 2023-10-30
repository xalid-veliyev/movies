// import axios from "axios";
// import { Fragment, useEffect, useState } from "react";
// import { AiFillPlayCircle, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
// import NoImg from "./NoImage.jpg";
// import TrailerMovies from "../Trailers/TrailerMovies";
// import { connect } from "react-redux";
// import { AnimatePresence } from "framer-motion";

// function Movies({ searchInput }) {
//   const [moviesData, setMoviesData] = useState([]);
//   const [trailer, setTrailer] = useState(true);
//   const [movieTitle, setMoviesTitle] = useState("");

//   const [castOpen, setCastOpen] = useState(false); // Yeni  state
//   const [castData, setCastData] = useState([]); // Yeni  state

//   const Shown = searchInput ? "search" : "discover";
//   const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
//   const Images = "https://image.tmdb.org/t/p/w500";

//   const MovieCall = async () => {
//     const data = await axios.get(Api, {
//       params: {
//         api_key: "13ebc25a3ad69ab8f6bc3d464e17d780",
//         query: searchInput,
//       },
//     });
//     const results = data.data.results;
//     setMoviesData(results);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       MovieCall();
//     }, 100);
//   }, [searchInput]);

//   const [movieId, setMovieId] = useState(0);
//   const toggle = true;

//     // Cast bölümü ucun funksiya
//     const openCast = async (movieId) => {
//       setCastOpen(true);

//       const castApi = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
//       try {
//         const response = await axios.get(castApi, {
//           params: {
//             api_key: "13ebc25a3ad69ab8f6bc3d464e17d780",
//           },
//         });
//         const cast = response.data.cast;
//         setCastData(cast);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//   return (
//     <Fragment>
//       <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
//         <div className="movies-container">
//           {moviesData.map((movie) => {
//             return (
//               <div
//                 key={movie.id}
//                 onClick={() => setMovieId(movie.id)}
//                 id={trailer ? "container" : "NoContainer"}
//               >
//                 <AiFillPlayCircle
//                   color="#fff"
//                   fontSize={40}
//                   id={trailer ? "playIcon" : "hide"}
//                 />
//                 <img
//                   src={
//                     movie.poster_path ? `${Images}${movie.poster_path}` : NoImg
//                   }
//                   alt=""
//                 />
//                 <h3
//                   id={movie.title.length > 28 ? "smaller-Text" : ""}
//                   className={toggle ? "maincolor" : "secondaryColor"}
//                 >
//                   {movie.title}
//                 </h3>
//                 <AiOutlineUser
//                   color="#fff"
//                   fontSize={24}
//                   id={trailer ? "castIcon" : "hide"}
//                   onClick={() => openCast(movie.id)} // Cast iconuna tıklanınca funksiya cagirmaq
//                 />

// {castOpen && ( // Cast bölümünün açık olduğunu gostermek
// <div className="cast-section">
// <h4>Cast</h4>
// <ul>
// {castData.map((cast) => (
// <li key={cast.id}>{cast.name}</li>
// ))}
// </ul>
// </div>
// )}

//               </div>
//             );
//           })}
//           <AnimatePresence>
//             {movieId && (
//               <TrailerMovies
//                 id={movieId}
//                 type="movie"
//                 setMovieId={setMovieId}
//                 toggle={toggle}
//               />
//             )}
//           </AnimatePresence>
//           <AiOutlineClose
//             id={trailer ? "Nothing" : "Exit1"}
//             className={toggle ? "DarkTheme" : "LightThemeClose"}
//             fontSize={55}
//             color="#fff"
//             cursor={"pointer"}
//             onClick={() => setTrailer(true)}
//           />
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// const mapStateToProps = (state) => ({
//   searchInput: state.searchInput,
// });

// export default connect(mapStateToProps)(Movies);

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {
  AiFillPlayCircle,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import NoImg from "./NoImage.jpg";
import TrailerMovies from "../Trailers/TrailerMovies";
import { connect } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import Pagination from "./Pagination";

function Movies({ searchInput }) {
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [movieTitle, setMoviesTitle] = useState("");

  const [castOpen, setCastOpen] = useState(false);
  const [castData, setCastData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0); 

  const Shown = searchInput ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500";

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "13ebc25a3ad69ab8f6bc3d464e17d780",
        query: searchInput,

        page: currentPage, // Şu anki sayfa numarasını API isteğine ekledik
      },
    });
    const results = data.data.results;
    console.log(results);
    setMoviesData(results);

    const totalResults = data.data.total_results; // Toplam netice sayi
    const totalPages = Math.ceil(totalResults / 20); // Sayfa sayıni hesapla (her sehifede 20 film varsa)
    setTotalPages(totalPages); // Toplam sayfa sayısını yenile
  };

  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);
  }, [searchInput, currentPage]); // currentPage elave eledik

  const [movieId, setMovieId] = useState(0);
  const toggle = true;

  const openCast = async (movieId) => {
    setCastOpen(true);

    const castApi = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    try {
      const response = await axios.get(castApi, {
        params: {
          api_key: "13ebc25a3ad69ab8f6bc3d464e17d780",
        },
      });
      const cast = response.data.cast;
      setCastData(cast);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setCastOpen(false);
  };

  // Sayfa nomresini deyisdiren funksiya
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

const [filteredMovies,setFilteredMovies] = useState([]);

const handleFilter =(catagory) =>{
  setFilteredMovies(moviesData.filter (b=> b.genre_ids.find(c=>+c == +catagory)));

}

  return (
    <>
      
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <div
                key={movie.id}
                onClick={() => setMovieId(movie.id)}
                id={trailer ? "container" : "NoContainer"}
              >
                <AiFillPlayCircle
                  color="#fff"
                  fontSize={40}
                  id={trailer ? "playIcon" : "hide"}
                />
                <img
                  src={
                    movie.poster_path ? `${Images}${movie.poster_path}` : NoImg
                  }
                  alt=""
                />
                <h3
                  id={movie.title.length > 28 ? "smaller-Text" : ""}
                  className={toggle ? "maincolor" : "secondaryColor"}
                >
                  {movie.title}
                </h3>
                <AiOutlineUser
                  color="#fff"
                  fontSize={24}
                  id={trailer ? "castIcon" : "hide"}
                  onClick={() => openCast(movie.id)}
                />
              </div>
            );
          })}
          <AnimatePresence>
            {movieId && (
              <TrailerMovies
                id={movieId}
                type="movie"
                setMovieId={setMovieId}
                toggle={toggle}
              />
            )}
          </AnimatePresence>
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
      <Modal isOpen={castOpen} onClose={closeModal}>
        <h4>Cast</h4>
        <ul>
          {castData.map((cast) => (
            <li key={cast.id}>{cast.name}</li>
          ))}
        </ul>
      </Modal>
      {/* Pagination ucun  */}
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        {/* <ul>
          <li onClick={()=>handleFilter(28)} style={{color:"red"}}>
            Aksiyon
          </li>
          <li onClick={()=>handleFilter(53)} style={{color:"red"}}>
            Dram
          </li>

        </ul> */}

        {filteredMovies.length > 0 && <div>
          
          {filteredMovies.map((mov)=>
          <p>{mov.title}</p>
          )}
          </div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  searchInput: state.searchInput,
});

export default connect(mapStateToProps)(Movies);
