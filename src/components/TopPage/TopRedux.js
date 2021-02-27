import classes from './Top.module.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTop } from '../../redux/reducers/reducer'
import Spinner from '../../Common/loading/spinner'
import Paginator from '../../Common/Paginator/Paginator'
import MovieCard from '../MovieCard/MovieCard'

export default function TopRedux() {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTop(currentPage))
    }, [])

    const movies = useSelector(state => state.topMovies)
    const loading = useSelector(state => state.isFetching)
    const currentPage = useSelector(state => state.page)
    const totalPage = useSelector(state => state.totalPage)
    const error = useSelector(state => state.error)
    
    return (
        <div>
            {loading ? <Spinner/> : 
                <div>
                    <div className='d-flex justify-content-end'>
                        <Paginator pages={totalPage} currentPage={currentPage} fn={setTop}/>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {movies.map(movie => {
                            return <MovieCard key={movie.id} movie={movie} />
                        })}
                    </div>
                </div>
            }
        </div>
            
    )
}
