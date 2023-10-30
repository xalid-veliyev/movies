import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { AiOutlineClose, AiFillPlayCircle} from 'react-icons/ai'
import NoImg from './NoImage.jpg'    
import TrailerTrending from "../Trailers/TrailerTrending"
import { connect } from "react-redux";
import { AnimatePresence } from "framer-motion";

function Trends({ searchInput }) {
  const Api = `https://api.themoviedb.org/3`
  const TrendsShown = '/trending/all/week'
  const [trendArray, setTrendArray] = useState ([])
  const [trendTitle, setTrendTitle] = useState ('')
  const [trailer,setTrailer] = useState(true)
  const Images = 'https://image.tmdb.org/t/p/w500'

  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}` , {
      params: {
        api_key:'13ebc25a3ad69ab8f6bc3d464e17d780',
        query: searchInput,                 
      }
    })
    const results = data.data.results;
    setTrendArray(results) 
  }
  useEffect(() => {
    setTimeout(() => {
      Trends()
    }, 100)
   
  },[searchInput])      

  const [trendId, setTrendId] = useState(0);
const toggle = true;

return (
  <Fragment>
    <div className={toggle ? "mainBgColor" :'secondaryBgColor'}>
      <div className="movies-container">

        {trendArray.map((trend) => (

          <div 
          key={trend.id}>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle
                color='#fff'
                fontSize={40}
                id={trailer ? "playIcon" : 'hide'}
              />
              <img
                src={
                  trend.poster_path
                    ? `${Images}${trend.poster_path}`
                    : NoImg
                }
                alt=''
                onClick={() => setTrendId(trend.id)}
              />
              <h3
                id='smaller-Text'
                className={toggle ? 'maincolor' : 'secondaryColor'}
              >
                {trend.title}
              </h3>
            </div>
          </div>
        
        ))}

       <AnimatePresence>
            {trendId && (
              <TrailerMovies
                id={trendId}
                type="movie"
                setMovieId={setId}
                toggle={toggle}
              />
            )}
          </AnimatePresence>

        <AiOutlineClose
          id={trailer ? 'Nothing' : 'Exit1'}
          className={toggle ? 'DarkTheme' : 'LightThemeClose'}
          fontSize={55}
          color="#fff"
             cursor={'pointer'}
               onClick={() => setTrailer(true)} />
          </div>
        </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  searchInput: state.searchInput,
});

export default connect(mapStateToProps)(Trends);


// import { Fragment, useEffect, useState } from "react";
// import { AiFillPlayCircle } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
// import NoImg from "./NoImage.jpg";
// import axios from "axios";
// // import TrailerTvShows from "../Trailers/TrailerTvShows";
// import TrailerMovies from "../Trailers/TrailerMovies";
// import { connect } from "react-redux";

// function Trending({ searchInput }) {
//   const [trendData, setTrendData] = useState([]);
//   const [trailer, setTrailer] = useState(true);
//   const Shown = searchInput ? "search" : "discover";
//   const [title, setTitle] = useState("");
//   const Api = `https://api.themoviedb.org/3/${Shown}/trending`;
//   const Images = "https://image.tmdb.org/t/p/w500";

//   const Trending = async () => {
//     const data = await axios.get(Api, {
//       params: {
//         api_key: "13ebc25a3ad69ab8f6bc3d464e17d780",
//         query: searchInput,
//       },
//     });
//     const results = data.data.results;
//     setTrendData(results);
//   };
//   useEffect(() => {
//     Trending();
//   }, [searchInput]);

//   const [trendId, setTrendId] = useState(0);
//   const toggle = true;
  
//   return (
//     <Fragment>
//       <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
//         <div className="movies-container">
//           {trendData.map((trend) => {
//             return (
//               <Fragment key={trend.id}>
//                 <div id={trailer ? "container" : "NoContainer"}>
//                   <AiFillPlayCircle
//                     color="#fff"
//                     fontSize={40}
//                     id={trailer ? "playIcon" : "hide"}
//                     onClick={() => setTrendId(trend.id)}
//                   />
//                   <img
//                     src={
//                       trend.poster_path
//                         ? `${Images}${trend.poster_path}`
//                         : NoImg
//                     }
//                     alt=""
//                     onClick={() => setTrendId(trend.id)}
//                   />
//                   <h3
//                     id={trend.name.length > 28 ? "smaller-Text" : ""}
//                     className={toggle ? "mainColor" : "secondaryColor"}
//                   >
//                     {trend.name}
//                   </h3>
//                 </div>
//               </Fragment>
//             );
//           })}
//           {trendId && <TrailerMovies type="trend" setTrendId={setTrendId} id={trendId} toggle={toggle} />}

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

// export default connect(mapStateToProps)(Trending);