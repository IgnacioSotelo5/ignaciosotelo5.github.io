export async function searchMovieByID({id} : {id: string}){    
    
    try{
        const response = await fetch(`http://localhost:3000/movies/${id}`)                 
        const data = await response.json();
        const dataMapped = Object.entries(data).reduce((obj: {[key: string]: unknown}, [keys, value]) => {           
            obj[keys] = value;
            return obj
        }, {})

        if(Object.values(dataMapped).length > 1) return data  
        
        
        return null
    } catch (err){
     throw new Error('No se encontro la pelicula con el ID solicitado')
     
    }

}

