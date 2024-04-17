import './App.css'
import { Movies } from './components/Movies'
import useMovies  from './hooks/movies'
import { useSearch } from './hooks/search'
import { Route, Routes } from 'react-router-dom'
import { MovieDetails } from './components/MoviesDetail'
import { useEffect } from 'react'
import { List } from './components/list'

function App() {
  const {search, setSearch, error} = useSearch()  
  const {movies, genres, getMovies} = useMovies({search, id:''})

  useEffect(()=>{
    getMovies()
  },[getMovies])
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {search} = Object.fromEntries(new window.FormData(event.currentTarget))
    setSearch(search.toString())
    getMovies()
  }  


  return (
    <>
     <header>
        <h1>Find Movies</h1>
        <form onSubmit={handleSubmit}>
          <input name='search' type='search' id='search' placeholder='Avengers, Avatar, Interstellar' />
           <button id='button-search' type='submit'>
            <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/></svg>
          </button>
        </form>
        <p>{error}</p>
     </header>

     <main>
      <Routes >
        <Route path='/:id' element={<MovieDetails />} />
        <Route path='*' element={
          <section className='movies-container'>
            <Movies genres={genres} movies={movies} search={search}/>
            <List />
          </section>
          }
        />
      </Routes>
     </main>
     
    </>
  )
}

export default App
