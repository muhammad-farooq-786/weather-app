//1ad8b565
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState} from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import  './Search.svg'

const API_URL = 'http://omdbapi.com?apikey=1ad8b565';
function App() {
  const[movies,setMovies] = useState([]);
  const[search,setSearch] = useState("");

  const movieData = async (title) =>{
    const movieResponse = await fetch(`${API_URL}&s=${title}`);
    const data = await movieResponse.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    movieData('Spiderman');
  },[])

  return (
      <div className='app'>
        <h1>MovieLand</h1>
        <div className='search'>
          <input value ={search} placeholder='Search for movies'
          onChange={(e)=> setSearch(e.target.value)}
          />
          <img src='SearchIcon' alt='serach'
          onClick={()=>movieData(search)}/>
        </div>


        {movies.length > 0 ?
        (<div className='conatiner'>
          {movies.map((movie) =>
          <MovieCard movie={movie}/>
          )}
        </div>) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}
      </div>
  );
}

export default App;
