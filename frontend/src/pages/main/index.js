import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import backend from '../../services/backend'
import { Link } from 'react-router-dom'
import './styles.css'


function Main() {
    const [movies, setMovies] = useState([])

    async function handleFavorites(e) {
        e.preventDefault()
        const index = (e.target.id)
        const title = movies[index].title
        const overview = movies[index].overview
        await backend.post('/', { title, overview })
        alert(`${movies[index].title} favoritado!`)
    }

    useEffect(() => {
        api.get('').then(response => {
            setMovies(response.data.results)
        })
    })

    return (
        <>
            <div className="header">
                <header>Filmes mais bem avaliados</header>
                <Link to="favorites">Favoritos</Link>
            </div>
            <div className="movie-list">
                {movies.map((movie, index) => (
                    <form onSubmit={handleFavorites} key={movie.id} id={index}>
                        <article>
                            <strong>{movie.title}</strong>
                            <p>{movie.overview}</p>
                            <button type="submit">Favoritar</button>
                        </article>
                    </form>
                ))}
            </div>
        </>
    )

}

export default Main