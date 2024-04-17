import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { STATUS_CODES } from 'http';


const base_url = 'https://movies-app-deploy-production-b95e.up.railway.app/movies'

@Injectable()
export class MovieService {
  async getMovies(query: string){

    if(query){
      try {
        const res = await fetch(`${base_url}?search=${query.toLowerCase()}`)
        const movie = await res.json()        
        if(!Object.keys(movie).length) throw new NotFoundException({message: 'No se encontro ninguna pelicula que coincida con la búsqueda'})
        return movie
        }
      catch(error){        
        return {
          message : error.message,
          statusCode: error.status,
          error: STATUS_CODES[404]
        }
      }
    }
    else{
      try {
        const response = await fetch(base_url)
        const movie = response.json()
        return movie
      } catch (error) {
        throw new Error(error.message)
    }   
  }
}
  
  async getMovieById(id: string){   
    try {
      const res = await fetch(base_url + '/' + id)
      return res.json()
    } catch (error) {
      throw new Error(error.message)
    }
  }

}

