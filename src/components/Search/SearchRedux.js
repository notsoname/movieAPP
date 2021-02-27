import React, { useState } from 'react'
import classes from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setMovie } from '../../redux/reducers/reducer'
import Spinner from '../../Common/loading/spinner'
import MovieCard from '../MovieCard/MovieCard'


export default function SearchRedux() {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const HandleSearch = (e) => {
        e.preventDefault()
        dispatch(setMovie(1, value))
    }

    const movieList = useSelector(state => state.movies)
    const loading = useSelector(state => state.isFetching)
    const error = useSelector(state => state.error)

    return (
        <div>
            <form onSubmit={(e) => HandleSearch(e)} className={classes.form}>
                <input className={classes.input} onChange={(e) => setValue(e.target.value)} value={value}/>
                <button className='btn btn-secondary'><i className='fa fa-search' /></button>
            </form>
            <div className={classes.searchMovie}>
                    {error ? <div className={classes.error}>Попробуйте найти фильм по названию</div> : null}
                    {loading ? <Spinner/> : 
                    <div className={classes.movie}>
                    {movieList.map(movie => {
                    return <MovieCard key={movie.id} movie={movie}/>
                    })}
                    </div>
                    }
                </div>
        </div>
    )
}