import { useCallback, useRef, useState } from "react";
import { searchMovies } from "../services/getMovies";
import Movies from "../interfaces/movie";
import { searchMovieByID } from "../services/getMoviesByID";

export default function useMovies ({search, id}:{search: string, id: string}){
    const [movies, setMovies] = useState<Movies[] | Movies 
    | null>([]);
    const genres = Array.isArray(movies) ? [...new Set(movies.flatMap(movie => movie.genre))] : [];    
    const previousSearch = useRef(search)  
    const isFirstRender = useRef(true)    

    const getMovies = useCallback( async()=>{
        if(!search.match(/^(?!.*\s)[\s\S]*$/)) return

        if(!isFirstRender.current){
            if(search.length <= 3) return
        }
        if(isFirstRender.current){
            isFirstRender.current = false
        } else{
            if(search === previousSearch.current){
                return
            }  
        }
        
        try {            
            const movies = await searchMovies({search})                
            setMovies(movies)
            previousSearch.current = search
        } catch (error) {
            setMovies(null)
            throw new Error('Hubo un error en la búsqueda');
        }
    }, [search]) 

    const getMovieByID = useCallback( async()=>{
        if(isFirstRender.current){
            isFirstRender.current = false
        } else{
            if(search === previousSearch.current){
                return
            }       
        }
        try {                
            const movie = await searchMovieByID({id})                   
            setMovies(movie!)
            previousSearch.current = search
        } catch (error) {
            throw new Error('No se encontro la pelicula con el ID solicitado.')
        }
    }, [search, id]) 

        return {movies, genres, getMovies, getMovieByID}
    }
        