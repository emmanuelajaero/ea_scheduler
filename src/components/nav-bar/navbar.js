import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import LayersIcon from '@material-ui/icons/Layers';

import classes from './navbar.module.css'

function EA_NavBar() {
    return (
        <nav>
            <div style={{display: "flex"}}>
                <IconButton aria-label="delete" className={classes.listButton}>
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
