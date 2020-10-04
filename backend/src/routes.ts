import express from 'express'
import db from './database/connection'
const routes = express.Router()

routes.post('/', async (req, res) => {
    const { title, overview } = req.body

    const insertedFavoritesIds = await db('favorites').insert({ title, overview })
    return res.send()
})
routes.get('/favorites', async (req, res) => {
    const favorites = await db('favorites').select('favorites.*')
    return res.json(favorites)
})

export default routes

