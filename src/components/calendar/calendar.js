import React from 'react'

import classes from './calendar.module.css'
import WorkorderTile from './workorder-tile'



const EA_Calendar = (props) => {
    console.log("Calendar Map : > ", props)

    return (
        <div className={classes.calendarContainer} style={{height: props.workingPeriod*120 +34}} >

            {
                Object.keys(props.workOrders).map(employee => {
                    return (
                        <div className={classes.staffColumn}>
                            <div className={`${classes.tileText} ${classes.headerSection}`}>{employee}</div>
                            {props.workOrders[employee].map(task => {
                                return (
                                    <WorkorderTile task={task} />
                                )
                            })}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default EA_Calendar
