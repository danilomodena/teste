import React, { useEffect, useState } from 'react'
import backend from '../../services/backend'
import { Link } from 'react-router-dom'
import './styles.css'

function Favorites() {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        backend.get('/favorites').then(response => {
            setFavorites(response.data)
        })
    })
    return (
        <>
            <div className="favorites-header">
                <Link to="">Voltar</Link>
                <header>Seus filmes favoritos</header>
            </div>
            <div className="favorites-list">
                {favorites.map((movie) => (
                    <article key={movie.id}>
                        <strong>{movie.title}</strong>
                        <p>{movie.overview}</p>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Favorites