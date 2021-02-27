import * as axios from "axios";


const instanse = axios.create( {
        baseURL: "https://api.themoviedb.org/3/",
    }
)

const key = "1f1938aeaaee824cd6b3b9cd897c12b1"


export const getTopMovies = (page) => {
    return instanse.get(`movie/top_rated?api_key=${key}&language=ru&page=${page}`)
}
export const getSearchMovie = (page, query) => {
    return instanse.get(`search/movie/?api_key=${key}&query=${query}&language=ru&page=${page}`)
}
export const getMovieInfo = (id) => {
    return instanse.get(`/movie/${id}?api_key=${key}&language=ru`)
}
