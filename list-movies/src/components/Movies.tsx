import { Link } from "react-router-dom";
import type Movies  from "../interfaces/movie";
import { PlayListAddIcon, StarIcon } from "./icons/icons";
import { MovieSearch } from "./MoviesSearch";
import { useContext } from "react";
import { MovieListContext } from "../context/movie-list-context";

export function Movies({genres, movies, search} : {genres: string[], movies: Movies[] 
  | Movies | null, search : string}){  
  const {list, setList} = useContext(MovieListContext) 

  const handleAdd = ({movie} : {movie : Movies}) =>{
    if(list.find((m: Movies) => m.id === movie.id)) return
    setList([...list, movie])

  }
  
  return(
        <>
        { 
          (search && search.match(/^(?!.*\s)[\s\S]*$/) && search.length > 3) ?  
          (
            Array.isArray(movies) ? (
              movies.map((movie) => (
                  <MovieSearch key={movie.id} movie={movie} />                  
            )
          )) : <p>No se encontraron peliculas</p>)
          : 
          (genres.map((gen) => (
            <article className='genre-container' key={gen}>
            <h2>{gen}</h2>
            <div className='genre-movies'>
            {
              Array.isArray(movies) ? (
                movies
                .filter(movie => movie.genre.some((g: string) => g.toLowerCase() == gen.toLowerCase()))
                .map((movie : Movies) => (
                  <div key={movie.id} className='movie'>
                    <img src={movie.poster} alt={movie.title} />
                    <div className="movie-info">
                    <span className='rate-movie'>
                      <StarIcon /> 
                      {movie.rate}
                    </span>
                      <Link to={`/${movie.id}`}>
                        <p>{movie.title}</p>
                      </Link>
                      <button id="add-to-playlist-button" onClick={() => handleAdd({movie})}>
                        <PlayListAddIcon className='add-icon'/>
                        {'Add to watchlist'}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No se encontraron peliculas para este género.</p>
              )
            }
            </div>
          </article>
        )))
            
            
      }
        </>
    )
}