import axios from 'axios'

const api = axios.create({baseURL: 'https://api.themoviedb.org/3/movie/top_rated?api_key=f74507ea60fd7cb81e385ec46aa20a35&language=en-US&page=1'})

export default api
