import React, { useEffect } from 'react'
import { toggleAddWorkOrder } from '../../store/actions/triggers'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ListIcon from '@material-ui/icons/List';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import LayersIcon from '@material-ui/icons/Layers';

import classes from './navbar.module.css'

function EA_NavBar() {
    const dispatch = useDispatch()
    
  
    // useEffect(() => {
    // }, [])

    // console.log("addWorkOrder :> ", addWorkOrder)
    return (
        <nav>
            <div style={{display: "flex"}}>
                <IconButton 
                    aria-label="Show Side Bar" 
                    className={classes.listButton}
                    onClick={() => {
                        dispatch(toggleAddWorkOrder());
                    }}
                >
                    <ListIcon  />
                </IconButton>

                <div className={classes.appName}>
                    Scheduler
                    <span>EA</span>
                </div>
            </div>

            <div className={classes.summary}>
                <Badge badgeContent={4} color="primary">
                    <LayersClearIcon />
                </Badge>
                <Badge badgeContent={10} color="primary">
                    <LayersIcon />
                </Badge>
            </div>
        </nav>
    )
}

export default EA_NavBar
