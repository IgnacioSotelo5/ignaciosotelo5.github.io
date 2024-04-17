import { Link } from "react-router-dom";
import Movies from "../interfaces/movie";

export function MovieSearch({movie} : {movie: Movies}){
    return(
        <div key={movie.id} className='movie-search'>
            <div className="movie-search-wrapper">
            <Link className="link" to={`/${movie.id}`}>
            <img src={movie.poster} alt={movie.title} />
            </Link>
              <div>
                <Link className="link" to={`/${movie.id}`}>
                    <h4 id="title">{movie.title}</h4>
                </Link>
                <span className='year'>
                  {movie.year}
                </span>
                <span>{movie.director}</span>
              </div>
            </div>
        </div>
    )
}