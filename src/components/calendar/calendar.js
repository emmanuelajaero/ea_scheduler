import React from 'react'

import classes from './calendar.module.css'
import WorkorderTile from './workorder-tile'



// workingPeriod*60*2
const EA_Calendar = (props) => {
    // const { employee, tasks } = props;

    // {Object.keys(workOrders).map(employee => {
    //     return <EA_Calendar employee={employee} tasks={workOrders[employee]} />
    // })}

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
