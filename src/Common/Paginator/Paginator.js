import React from 'react'
import { useDispatch } from 'react-redux';
import classes from './Paginator.module.scss'

export default function Paginator(props) {
    const dispatch = useDispatch();
    return (
        <div className={classes.pagination}>
            <div className={classes.buttons}>
                {props.currentPage > 1 &&
                    <button
                        className={classes.pagination__button}
                        onClick={() => dispatch(props.fn(props.currentPage - 1, props.payload,))}>{props.currentPage - 1}</button>}
                <button className={`${classes.pagination__button} ${classes.current}`} disabled={true}>
                    {props.currentPage}
                </button>
                {(props.currentPage < (props.pages ? props.pages : 0)) &&
                    <button
                        className={classes.pagination__button}
                        onClick={() => dispatch(props.fn(props.currentPage + 1, props.payload,))}>{props.currentPage + 1}</button>}
            </div>
        </div>
    )
}
