import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import Movies from "../interfaces/movie";
interface MovieListContextType{
    list: Movies[];
    setList : Dispatch<SetStateAction<Movies[]>>
}

  // Crear contexto con un valor inicial vacío
export const MovieListContext = createContext<MovieListContextType>({
    list : [],
    setList : () => {}
});

export function PendingContext({children} : {children: React.ReactNode}){
    const item = window.localStorage.getItem('list');
    const storagedItems = item ? JSON.parse(item) : null;
    
    const [list, setList] = useState(storagedItems ? storagedItems : [])    

    useEffect(()=>{
        window.localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return(
        <MovieListContext.Provider value={{list, setList}}>
            {children}
        </MovieListContext.Provider>
    )
    
}