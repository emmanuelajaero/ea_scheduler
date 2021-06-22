import React from 'react'
import { toggleAddWorkOrder } from '../../store/actions/triggers'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import PublicIcon from '@material-ui/icons/Public';

import classes from './sidebar-nav.module.css';

function SidebarNav(props) {
    const dispatch = useDispatch()

    return (
        <div className={classes.sidebarContainer}>
            <div style={{height: "10px"}}></div>
            {/* <IconButton aria-label="add work order" className={[classes.sidebarItem, classes.sidebarItemInactive]}> */}
            <IconButton onClick={() => {dispatch(toggleAddWorkOrder())}} aria-label="add work order" className={[classes.sidebarItem, classes.sidebarItemActive]}>
                <AddCircleOutlineIcon  /> <span className={classes.title}>Add to</span>
            </IconButton>

            <IconButton onClick={() => window.location.href = "https://github.com/emmanuelajaero/ea_scheduler/blob/master/README.md"} aria-label="add work order" className={[classes.sidebarItem, classes.sidebarItemInactive]}>
            {/* <IconButton aria-label="add work order" className={[classes.sidebarItem, classes.sidebarItemActive]}> */}
                <DescriptionIcon  /> <span className={classes.title}>How To</span>
            </IconButton>

            <IconButton onClick={() => window.location.href = "https://github.com/emmanuelajaero/ea_scheduler"} aria-label="add work order" className={[classes.sidebarItem, classes.sidebarItemInactive]}>
            {/* <IconButton aria-label="add work order" className={[classes.sidebarItem, classes.sidebarItemActive]}> */}
                <PublicIcon  /> <span className={classes.title}>Code Base</span>
            </IconButton>

        </div>
    )
}

export default SidebarNav
