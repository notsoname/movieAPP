import React from 'react'
import classes from './MovieCard.module.scss'
import poster from '../../Common/noIMG.png'
import { NavLink } from 'react-router-dom'

export default function MovieCard({movie}) {
    return (
        <NavLink className={classes.link} to={`/about/${movie.id}`}>
            <div className={classes.posterWrap}>
                <img className={classes.poster} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : poster} alt='poster'/>
                <div className={classes.title}>
                    {movie.title}
                </div>
                <div className={classes.rate}>{movie.vote_average}/10</div>
            </div>
        </NavLink>
    )
}
