import { getSearchMovie, getTopMovies, getMovieInfo } from "../../API/Api";

const SET_TOP_MOVIES = 'SET_TOP_MOVIES'
const SET_MOVIES = 'SET_MOVIES'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_PAGE = 'SET_PAGE'
const SET_PAGES = 'SET_PAGES'
const IS_ERROR = 'IS_ERROR'
const GET_MOVIE_INFO = 'GET_MOVIE_INFO'

const initialState = {
    movies: [],
    topMovies: [],
    movieInfo: null,
    isFetching: false,
    page: 1,
    totalPage: null,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_MOVIES:
        return {
            ...state,
            topMovies: action.payload
        }
        case SET_MOVIES:
        return {
            ...state,
            movies: action.payload
        }
        case SET_PAGE:
        return {
            ...state,
            page: action.payload
        }
        case SET_PAGES:
        return {
            ...state,
            totalPage: action.payload
        }
        case IS_ERROR:
        return {
            ...state,
            error: action.payload
        }
        case TOGGLE_IS_FETCHING:
        return {
            ...state,
            isFetching: action.payload
        }
        case GET_MOVIE_INFO:
        return {
            ...state,
            movieInfo: action.payload
        }
        default:
            return state;
    }
}


export const setTopMovies = (movie) => {
    return {
        type: SET_TOP_MOVIES,
        payload: movie
    }
}
export const setMovies = (movie) => {
    return {
        type: SET_MOVIES,
        payload: movie
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: isFetching
    }
}
export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}
export const setPages = (pages) => {
    return {
        type: SET_PAGES,
        payload: pages
    }
}
export const setIsError = (error) => {
    return {
        type: IS_ERROR,
        payload: error
    }
}
export const setMovieInfo = (movieInfo) => {
    return {
        type: GET_MOVIE_INFO,
        payload: movieInfo
    }
}


export const setInfo = (id) => {
    return async dispatch => {
        await getMovieInfo(id)
            .then(response => {
                console.log(response.data)
                dispatch(setMovieInfo(response.data))
            })
    }
}

export const setTop = (page) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true))
        await getTopMovies(page)
            .then(response => {
                console.log(response.data)
                dispatch(setTopMovies(response.data.results))
                dispatch(toggleIsFetching(false))
                dispatch(setPage(response.data.page))
                dispatch(setPages(response.data.total_pages))
            })
    }
}

export const setMovie = (page, search) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true))
        await getSearchMovie(page, search)
            .then(response => {
                dispatch(setMovies(response.data.results))
                dispatch(toggleIsFetching(false))
            })
            .catch(err => {
                dispatch(toggleIsFetching(false))
                console.log(err.response.data.errors)
                if (err.response) {
                    dispatch(setIsError(err.response.data.errors));
                    } else if (err.request) {
                    console.log(err.request);
                    } else {
                    console.log('Error', err.message);
                    }
            })
    }
}
