import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import EventIcon from '@material-ui/icons/Event';

import Loader from '../../components/loader/loader'
import { Toaster } from 'react-hot-toast';

import Toast from '../../components/Toast/toast';

import classes from './home.module.css'
import SidebarNav from '../../components/sidebar-nav/sidebar-nav';
import EA_Calendar from '../../components/calendar/calendar';
import { useSelector } from 'react-redux';
import AddWorkOrder from '../../components/add-workorder/add-workorder';

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const workOrders = {
    "Time": [
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 9.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 10.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 11.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 12.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 1.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 2.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 3.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 4.0,
            duration: 1
        },
        {
            service: "",
            workOrderID: 0,
            description: "",
            start: 5.0,
            duration: 1
        },
    ],
    "Employee One": [
        {
            service: "Cleaning",
            workOrderID: 1,
            description: "Room 8",
            start: 9.0,
            duration: 2.03
        },
        {
            service: "Cooking",
            workOrderID: 2,
            description: "Cooking meal",
            start: 11.4,
            duration: 1.25
        },
        {
            service: "Gardening",
            workOrderID: 3,
            description: "Prowning the garden",
            start: 12.30,
            duration: 4.20
        },
        {
            service: "Gardening",
            workOrderID: 4,
            description: "Prowning the flowers",
            start: 4.51,
            duration: 0.5
        },
    ],
    "Employee Two": [
        {
            service: "Cleaning",
            workOrderID: 5,
            description: "Room 8",
            start: 9.0,
            duration: 2.3
        },
        {
            service: "Cooking",
            workOrderID: 6,
            description: "Cooking meal",
            start: 11.4,
            duration: 1.25
        },
        {
            service: "Gardening",
            workOrderID: 7,
            description: "Prowning the garden",
            start: 12.30,
            duration: 0.20
        },
        {
            service: "Gardening",
            workOrderID: 8,
            description: "Prowning the garden",
            start: 12.51,
            duration: 0.50
        },
    ],
    "Employee Three": [
        {
            service: "Cleaning",
            workOrderID: 9,
            description: "Room 8",
            start: 9.0,
            duration: 2.3
        },
        {
            service: "Cooking",
            workOrderID: 10,
            description: "Cooking meal",
            start: 11.4,
            duration: 1.25
        },
        {
            service: "Gardening",
            workOrderID: 11,
            description: "Prowning the garden",
            start: 12.30,
            duration: 4.20
        },
        {
            service: "Gardening",
            workOrderID: 12,
            description: "Prowning the garden",
            start: 4.51,
            duration: 0.5
        },
    ],
    "Employee Four": [
        {
            service: "Cleaning",
            workOrderID: 13,
            description: "Room 8",
            start: 9.0,
            duration: 2.3
        },
        {
            service: "Cooking",
            workOrderID: 14,
            description: "Cooking meal",
            start: 11.4,
            duration: 1.25
        },
        {
            service: "Gardening",
            workOrderID: 15,
            description: "Prowning the garden",
            start: 12.30,
            duration: 0.20
        },
        {
            service: "Gardening",
            workOrderID: 16,
            description: "Prowning the garden",
            start: 12.51,
            duration: 0.50
        },
    ],
    // "Employee Five": [
    //     {
    //         service: "Cleaning",
    //         workOrderID: 17,
    //         description: "Room 8",
    //         start: 9.0,
    //         duration: 2.3
    //     },
    //     {
    //         service: "Cooking",
    //         workOrderID: 18,
    //         description: "Cooking meal",
    //         start: 11.4,
    //         duration: 1.25
    //     },
    //     {
    //         service: "Gardening",
    //         workOrderID: 19,
    //         description: "Prowning the garden",
    //         start: 12.30,
    //         duration: 4.20
    //     },
    //     {
    //         service: "Gardening",
    //         workOrderID: 20,
    //         description: "Prowning the garden",
    //         start: 4.51,
    //         duration: 0.5
    //     },
    // ],
    // "Employee Six": [
    //     {
    //         service: "Cleaning",
    //         workOrderID: 17,
    //         description: "Room 8",
    //         start: 9.0,
    //         duration: 2.3
    //     },
    //     {
    //         service: "Cooking",
    //         workOrderID: 18,
    //         description: "Cooking meal",
    //         start: 11.4,
    //         duration: 1.25
    //     },
    //     {
    //         service: "Gardening",
    //         workOrderID: 19,
    //         description: "Prowning the garden",
    //         start: 12.30,
    //         duration: 4.20
    //     },
    //     {
    //         service: "Gardening",
    //         workOrderID: 20,
    //         description: "Prowning the garden",
    //         start: 4.51,
    //         duration: 0.5
    //     },
    // ],
}

const daysOfWeek = ["Sun", "Mon", "Tue", "wed", "Thur", "Fri", "Sat"]
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function Home(props) {
    const { triggers } = useSelector(state => state.triggers)
    const { addWorkOrder } = triggers

    const [viewDate, setViewDate] = useState(new Date())
    const [workingPeriod, setWorkingPeriod] = useState(17-9)

    useEffect(() => {
        Toast("Setup Completed", "success");
    }, [])

    const viewDateChanger = (direction) => {
        setViewDate(prev => {
            prev.setDate(prev.getDate()+direction)
            console.log(prev)
            return new Date(prev)
        })
    }

    useEffect(() => {
        console.log("addWorkOrder :> ", addWorkOrder)
    }, [addWorkOrder])

    return (
    <div className={classes.homeContainer}>
        <section className={classes.navSection}>
            <SidebarNav />
        </section>

        <section className={classes.calendarInputSection}>
            <div style={{width:"100%", backgroundColor: "#f2f2f2", height: "10px", zIndex: -1}}></div>

            <div className={classes.standardHorizontal}>
                <div className={classes.emailSection}>
                    <TextField
                        label="Email Address"
                        defaultValue=""
                        className={classes.emailInput}
                        variant="outlined"
                    />
                </div>
            </div>


            <div className={classes.shadowDown} style={{width: "100%"}}>
                <div className={classes.calendarDateChanger}>
                    <IconButton 
                        aria-label="Show Side Bar" 
                        className={classes.listButton}
                        onClick={() => viewDateChanger(-1)}
                    >
                        <ChevronLeftIcon  />
                    </IconButton>
                    <IconButton 
                        aria-label="Show Side Bar" 
                        className={classes.listButton}
                        onClick={() => viewDateChanger(1)}
                    >
                        <ChevronRightIcon  />
                    </IconButton>
                    {/* {viewDate.get} */}
                    <Chip
                        label={`${daysOfWeek[viewDate.getDay()]}, ${viewDate.getDate()} ${monthsOfYear[viewDate.getMonth()]} ${viewDate.getFullYear()}`}
                        onClick={()=>{}}
                        onDelete={()=>{}}
                        deleteIcon={<EventIcon />}
                    />
                </div>
            </div>

            <div className={classes.standardHorizontal} style={{overflow: "hidden"}}>
                <EA_Calendar workOrders={workOrders} workingPeriod={workingPeriod}/>
                
            </div>
            {/* <Loader className="loader-sm" />
            <h1>Home!</h1> */}
        </section>

        {addWorkOrder && <AddWorkOrder />}
        <Toaster />
    </div>
    )
}

export default Home
