// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Filter = () => {
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [moviesData, setMoviesData] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isFilterOpen, setIsFilterOpen] = useState(true); // Filtre durumunu tutmak için bir state ekledik


//   useEffect(() => {
//     MovieCall();
//   }, []); // Boş bağımlılık dizisi, bileşen oluşturulduğunda yalnızca bir kez çağrılmasını sağlar

//   const MovieCall = async () => {
//     const api = 'https://api.themoviedb.org/3/discover/movie';
//     try {
//       const response = await axios.get(api, {
//         params: {
//           api_key: '13ebc25a3ad69ab8f6bc3d464e17d780',
//         },
//       });
//       const data = response.data.results;
//       setMoviesData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleFilter = (genreId) => {
//     const filtered = moviesData.filter((movie) =>
//       movie.genre_ids.includes(genreId)
//     );
//     setFilteredMovies(filtered);
//   };

//   const handleFilterToggle = () => {
//     setIsFilterOpen(!isFilterOpen);
//     // Filtre durumunu tersine çevirir, açıksa kapatır, kapalıysa açar
//     setFilteredMovies([]); // Filtreleri sıfırlar
//   };


//   return (
//     <div className='filtermovies'>
//        <div className='filter-toggle' onClick={handleFilterToggle}>
//         {isFilterOpen ? 'X' : 'Filtrele'} {/* Filtre düğmesini oluşturduk */}
//       </div>
//       {isFilterOpen && (
//       <ul>
//         <li onClick={() => handleFilter(28)} style={{ color: 'red' }}>
//           Aksiyon
//         </li>
//         <li onClick={() => handleFilter(18)} style={{ color: 'red' }}>
//           Dram
//         </li>
//         <li onClick={() => handleFilter(80)} style={{ color: 'red' }}>
//           Tarix
//         </li>
//         <li onClick={() => handleFilter(28)} style={{ color: 'red' }}>
//           Fantastik
//         </li>
//         <li onClick={() => handleFilter(18)} style={{ color: 'red' }}>
//           Qorxu
//         </li>
//         <li onClick={() => handleFilter(18)} style={{ color: 'red' }}>
//           Romantik
//         </li>
//         <li onClick={() => handleFilter(18)} style={{ color: 'red' }}>
//           Gerilim
//         </li>
//         <li onClick={() => handleFilter(18)} style={{ color: 'red' }}>
//           Western
//         </li>
//       </ul>
//       )}

//       {filteredMovies.length > 0 && (
//         <div>
//           {filteredMovies.map((mov) => (
//             <p key={mov.id}>{mov.title}</p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filter;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filter = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  useEffect(() => {
    MovieCall();
  }, []);

  const MovieCall = async () => {
    const api = 'https://api.themoviedb.org/3/discover/movie';
    try {
      const response = await axios.get(api, {
        params: {
          api_key: '13ebc25a3ad69ab8f6bc3d464e17d780',
        },
      });
      const data = response.data.results;
      setMoviesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (genreId) => {
    const filtered = moviesData.filter((movie) =>
      movie.genre_ids.includes(genreId)
    );
    setFilteredMovies(filtered);
    setSelectedGenreId(genreId);
  };

  const handleMovieClick = (movie) => {
    // Filmin bağlantısı için gerekli işlemleri yapabilirsiniz
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
    setFilteredMovies([]);
  };

  return (
    <div className='filtermovies'>
      <div className='filter-toggle' onClick={handleFilterToggle}>
        {isFilterOpen ? 'X' : 'Filtrele' }
      </div>
      {isFilterOpen && (
        <ul>
          <li
            onClick={() => handleFilter(28)}
            style={{ color: selectedGenreId === 28 ? 'red' : 'black' }}
          >
            Aksiyon
          </li>
          <li
            onClick={() => handleFilter(18)}
            style={{ color: selectedGenreId === 18 ? 'red' : 'black' }}
          >
            Dram
          </li>
          <li
            onClick={() => handleFilter(80)}
            style={{ color: selectedGenreId === 80 ? 'red' : 'black' }}
          >
            Tarix
          </li>
          <li
            onClick={() => handleFilter(88)}
            style={{ color: selectedGenreId === 88 ? 'red' : 'black' }}
          >
            Fantastik
          </li>
          <li
            onClick={() => handleFilter(27)}
            style={{ color: selectedGenreId === 27 ? 'red' : 'black' }}
          >
            Qorxu
          </li>
          <li
            onClick={() => handleFilter(88)}
            style={{ color: selectedGenreId === 88 ? 'red' : 'black' }}
          >
            Romantik
          </li>
          <li
            onClick={() => handleFilter(88)}
            style={{ color: selectedGenreId === 88 ? 'red' : 'black' }}
          >
            Gerilim
          </li>
          <li
            onClick={() => handleFilter(88)}
            style={{ color: selectedGenreId === 88 ? 'red' : 'black' }}
          >
            Western
          </li>
        </ul>
      )}

{filteredMovies.length > 0 && (
        <div>
          {filteredMovies.map((mov) => (
            <p key={mov.id} onClick={() => handleMovieClick(mov)}>
              {mov.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;


