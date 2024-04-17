import Movies from "../interfaces/movie";

export async function searchMovies({search} : {search: string}){
    try{
        const response = await fetch(`https://movies-app-deploy-production.up.railway.app/movies?search=${search}`) 
        const data = await response.json();         
                 
        return data?.map((movie: Movies) => ({
         id: movie.id,
         title: movie.title,
         year: movie.year,
         director: movie.director,
         duration: movie.duration,
         poster: movie.poster,
         genre: movie.genre,
         rate: movie.rate
     }))
    } catch (err){
     throw new Error('Hubo un error obteniendo peliculas.');
     
    }

}

