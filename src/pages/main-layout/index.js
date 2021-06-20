import React from 'react'
import EA_NavBar from '../../components/nav-bar/navbar'
import classes from './main-layout.module.css'

function MainLayout(props) {
    return (
        <div className={classes.set}>
            <EA_NavBar />
            {props.children}
            Hello From MainLayout
        </div>
    )
}

export default MainLayout
