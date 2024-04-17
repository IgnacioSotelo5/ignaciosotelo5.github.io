import { useContext, useState } from "react";
import Movies from "../interfaces/movie";
import { CloseIcon, DeleteIcon, LeftToRightListTriangleIcon } from "./icons/icons";
import { transformMinutes } from "../utils/transform-minutes";
import { MovieListContext } from "../context/movie-list-context";

export function ListItem ({movie} : {movie : Movies}){
    return(
        <li key={movie.id} className="list-item">
            <img src={movie.poster} alt={movie.title} />
            <div className="list-item-text">
                <h5>{movie.title}</h5>
                <span>{transformMinutes(movie.duration)}</span>
            </div>
        </li>
    )
}

export function List(){
    const [classCart, setClassCart] = useState('hide-list')
    const {list, setList} = useContext(MovieListContext)
    
    const handleCart = () => {        
        if(classCart === 'hide-list'){
            setClassCart('list')
        } else{
            setClassCart('hide-list')
        }
    }
    const clearCart = () => {
        window.localStorage.removeItem('list')
        setList([])

    }
    return(
        <>
        <div>
        <button id="cart-handler-button" onClick={handleCart} className={`${classCart === 'list' ? 'button-list' : 'button-list-hide'}`}>
            {
                classCart === 'hide-list' ? <LeftToRightListTriangleIcon /> :  <CloseIcon />
            }            
        </button>
        <aside className={classCart}>
        <h2>Watchlist</h2>
        <button id="cart-clear-button" className={`${classCart === 'hide-list' ? 'button-clear-list-hide' : 'button-clear-list'}`} onClick={clearCart}>
            <DeleteIcon />
        </button>

            <ul className="list-wrapper">
            {
                list?.length ? (
                    list?.map((movie) => (
                        <ListItem key={movie.id} movie={movie} />
                    ))
                ) : <p>Todavia no agregaste peliculas a la lista</p>
            }
            </ul>
        </aside>
        </div>
        </>
    )
}