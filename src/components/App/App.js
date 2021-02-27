import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutMovie from '../AboutMovie/AboutMovie'
import AppHeader from '../AppHeader/AppHeader'
import SearchRedux from '../Search/SearchRedux'
import TopRedux from '../TopPage/TopRedux'
import classes from './App.module.scss'

export default function App() {

    return (
        <div className={classes.app}>
            <AppHeader/>
            <div className={classes.wrapper}>
                <Switch>
                    <Route exact path='/' render={() => <SearchRedux/>}/>    
                    <Route exact path='/top' render={() => <TopRedux/>}/>    
                    <Route exact path='/about/:filmId' component={AboutMovie}/>    
                </Switch>
            </div>
        </div>
    )
}
