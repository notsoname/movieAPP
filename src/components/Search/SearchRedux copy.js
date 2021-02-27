import React, { useState } from 'react'
import classes from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setMovie } from '../../redux/reducers/reducer'
import Spinner from '../../Common/loading/spinner'
import Paginator from '../../Common/Paginator/Paginator'

export default function SearchRedux() {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const HandleSearch = (e) => {
        e.preventDefault()
        dispatch(setMovie(1, value))
    }

    const movieList = useSelector(state => state.movies)
    const loading = useSelector(state => state.isFetching)

    const img = {}

    return (
        <div>
            <form onSubmit={(e) => HandleSearch(e)} className='d-flex align-items-center'>
                <input className='form-control' onChange={(e) => setValue(e.target.value)} value={value}/>
                <button className='btn btn-secondary'><i className='fa fa-search' /></button>
            </form>
            <div className={classes.searchMovie}>
                    {loading && <Spinner/>}
                    <div className='d-flex flex-wrap justify-content-between'>
                        {movieList.map(movie => {
                        return (
                            <div className={classes.posterWrap}>
                                <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster'/>
                                <div>
                                    {movie.title}
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
        </div>
    )
}