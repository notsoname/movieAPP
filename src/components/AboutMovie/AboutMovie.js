import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../Common/loading/spinner'
import { setInfo } from '../../redux/reducers/reducer'
import classes from './AboutMovie.module.scss'

export default function AboutMovie(props) {

    const movieInfo = useSelector(state => state.movieInfo)
    const dispatch = useDispatch()
    const filmId = props.match.params.filmId;

    useEffect(() => {
        if (filmId) {
            dispatch(setInfo(+filmId));
        }
        return () => {
            dispatch(setInfo(null));
        }
    }, [])
    
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return (
        <div >
            {movieInfo ? 
            <div className={classes.wrapper}>
                <div className={classes.poster}>
                    <img className={classes.poster__img} src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt='poster'/>
                </div>
                <div className={classes.aboutMovie}>
                    <div className={classes.info}>
                        <div className={classes.title}>
                            {movieInfo.title}
                        </div>
                        <div className={classes.title__original}>
                            ({movieInfo.original_title})
                        </div>
                        <div className={classes.rate}>
                        {movieInfo.vote_average}/10
                        </div>
                    </div> 
                    <div className={classes.date}>
                        {new Date(`${movieInfo.release_date}`).getFullYear()} | {Math.floor((`${movieInfo.runtime}`) /60)} ч {Math.floor(`${movieInfo.runtime}`) % 60} мин. | {movieInfo.genres.map(genres => capitalizeFirstLetter((`${genres.name} `)))}
                    </div>
                    <div className={classes.descr}>
                        {movieInfo.overview}
                    </div>
                </div>
            </div>

            : <Spinner/>
        }
        </div>
    )
}
