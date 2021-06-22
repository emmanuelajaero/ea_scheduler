import { LocalPrintshopSharp } from '@material-ui/icons'
import React from 'react'

import classes from './workorder-tile.module.css'

const getFormatedTime = (time) => {
    return {
        hour: Math.trunc(time),
        minute: Math.floor(((time-Math.trunc(time))*100)).toString().length < 2 ? "0"+Math.floor(((time-Math.trunc(time))*100)).toString() : Math.floor(((time-Math.trunc(time))*100)).toString(),
        AM_PM: time>=9 && time<12 ? "AM" : "PM"
    }
}




const serviceColors = {
    "Cleaning": "#f29f7a",
    "Cooking": "#8ada88",
    "Gardening": "#88a6da"
}


function WorkorderTile(props) {

    const  { task } = props

     return (
        <>
            {task.workOrderID != 0 &&
                <div 
                    className={classes.workorderTileContainer}
                    style={{
                        top: (task.start<9 ? task.start+12-9 : task.start-9)*120 + 34,
                        height: task.duration*120,
                        backgroundColor: serviceColors[task.service]
                    }}
                    >
                    <div className={`${classes.tileText_} ${classes.textBox_}`}>
                        {task.service}
                        <br />
                        Starts:
                        <br />
                        {`${getFormatedTime(task.start).hour}:${getFormatedTime(task.start).minute} ${getFormatedTime(task.start).AM_PM}`}
                        <br />
                        Duration
                        <br />
                        {`${getFormatedTime(task.duration).hour}:${getFormatedTime(task.duration).minute}`}
                        <br />
                        Details:
                        <br />
                        {task.description}
                        
                    </div>
                </div>
            }
            {task.workOrderID == 0 &&
                <div 
                    className={classes.timeTileContainer} 
                    style={{
                        top: (task.start<9 ? task.start+12-9 : task.start-9)*120 + 34,
                        height: task.duration*120
                    }}
                >
                    <div className={`${classes.tileText} ${classes.textBox}`}>
                        {`${getFormatedTime(task.start).hour}:${getFormatedTime(task.start).minute} ${getFormatedTime(task.start).AM_PM}`}
                    </div>
                </div>
            }
        </>
    )
}

export default WorkorderTile
