import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './AppHeader.module.scss'

export default function AppHeader() {
    return (
        <div className={classes.header}>
            <NavLink to='/'><button className={classes.btn}><i className='fa fa-search'/></button></NavLink>
            <NavLink to='/top'><button className={classes.btn}>TOP<i className='fa fa-burn'></i></button></NavLink>
        </div>
    )
}