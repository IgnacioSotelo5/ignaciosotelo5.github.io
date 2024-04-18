import { useParams } from "react-router-dom";
import useMovies  from "../hooks/movies";
import { useSearch } from "../hooks/search";
import { useEffect } from "react";
import { StarIcon } from "./icons/icons";
import { transformMinutes } from "../utils/transform-minutes";

export function MovieDetails() {
    const params = useParams<{id: string}>()
    const {id} = params
    const idValidation = id ? id : ''    

    const {setSearch} = useSearch()
    const {movies, getMovieByID} = useMovies({id : idValidation, search: ''})
        
    useEffect(()=>{     
        if(id){
            setSearch(id)
            getMovieByID()
        }   
    }, [id, setSearch, getMovieByID])
        
    
    return (
        <>                
            {
                !Array.isArray(movies) && movies ? (
                    
                    <div className="movie-detail">
                      <img src={movies.poster} alt={movies.title} id='movie-img' />
                      <div className="info-details">
                      <header className="details-header">
                      <span className="movie-title">
                      {movies.title}
                      </span>
                      <div className="details">
                      <span>
                      {movies.year}
                      </span>
                      <span>
                      {transformMinutes(movies.duration)}
                      </span>
                      </div>
                      
                      </header>
                      <div className="details-movie">
                    {
                      movies.genre ? (
                          <div className="badge-container">
                            {
                            movies.genre.map((g) => (

                                <span key={g} className="badge-genre">
                                    {g}
                                </span>
                            ))
                            }
                        </div>
                        )
                        :
                        (
                            <p>The genre of the movie was not found.</p>
                        )  
                    }
                      <span className="rate">
                        <StarIcon />
                        {movies.rate}<span>/10</span>
                      </span>
                      <span className="director">
                        <span>Director:</span> {movies.director}
                      </span>
                      </div>
                      </div>
                      </div>
                      
                ) : <p className="error">There are no movies with this ID.</p>
            }
        </>
    )
}
