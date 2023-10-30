// import { Fragment, useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';
// import movieTrailer from 'movie-trailer';

// function TrailerTvShows({TvShowsTitle, toggle}) {
//   const [video, setVideo] = useState("");
//   const [videoURL, setVideoURL] =useState("");

//   function handleSearch() {
//     setVideo(TvShowsTitle)
// 	movieTrailer(TvShowsTitle).then((res) => {
// 	setVideoURL(res);
// 	});
// }
//  useEffect(() => {
//    handleSearch()
//  },[TvShowsTitle])

//   return (
//    <Fragment>
//     <div className='Container'>
//     </div>
//     <div className='player'>
//     <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{TvShowsTitle}</h1>
//     <ReactPlayer url={videoURL} controls={true} width={'1000px'} height={"500px" } muted={false} />
// 	</div>
//    </Fragment>
//   )
// }

// export default TrailerTvShows



import { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';


function TrailerTvShows({id, toggle}) {
  const [showdata, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=13ebc25a3ad69ab8f6bc3d464e17d780&language=en-US`)
   .then(a=>a.json()).then(a=>{
    showdata(a);setLoading(false)
   })
 },[id])
  return <Fragment>
    {
      !loading?data.results.length?  <div className='Container'>
      <div className='player'>
        <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{data.results[0].name}</h1>
      <ReactPlayer url={`https://www.youtube.com/embed/${data.results[0].key}`} controls={true} width={'1000px'} height={"500px" } muted={false} />
</div></div>:<h1>Trailer yoxdur</h1>:<h1>Loading</h1>


    }

 </Fragment>
}
export default TrailerTvShows


