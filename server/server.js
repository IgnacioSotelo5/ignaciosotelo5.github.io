const movies = require('./data/movies.json')
const express = require('express')
const app = express()
const port = 3030

app.use(express.json())

app.get('/movies', (req, res) => {
    const {search} = req.query
    if(search){
        const movie = movies.filter((m) => m.title.toLowerCase().includes(search))  
        if(movie.length === 0){
            return res.status(404).json({message: 'Movie not found'})
        } else{
            return res.json(movie)
        }
    }
    res.json(movies)
})


app.get('/movies/:id', (req, res) => {
    const {id, name} = req.params
    const movie = movies.find((movie) => movie.id === id)
    if(movie) return res.json(movie)
    
    res.status(404).json({message : 'Movie not found'})
})


app.listen(port, ()=> {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
