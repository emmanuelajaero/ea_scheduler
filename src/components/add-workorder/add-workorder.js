import React, { useState } from 'react'

import { TextField } from '@material-ui/core';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



import classes from './add-workorder.module.css'

const daysOfWeek = ["Sun", "Mon", "Tue", "wed", "Thur", "Fri", "Sat"]
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const services = [
    {
        service: "Cleaning",
        id:1
    },
    {
        service: "Cooking",
        id:2
    },
    {
        service: "Gardening",
        id:3
    },
]

const employees = [
    {
        employee: "Employee One",
        id:1
    },
    {
        employee: "Employee Two",
        id:2
    },
    {
        employee: "Employee Three",
        id:3
    },
    {
        employee: "Employee Four",
        id:5
    },
    {
        employee: "Employee Five",
        id:4
    },
]

function AddWorkOrder(props) {
    const [viewDate, setViewDate] = useState(new Date())
    const [service_, setServive] = useState('');
    const [employee_, setEmployee] = useState('');


  
    return (
        <div className={classes.addWorkOrderContainer}>

            <div className={classes.body}>

                <div className={classes.forgedDateDiv}>
                    
                    <span>{`${daysOfWeek[viewDate.getDay()]}, ${viewDate.getDate()} ${monthsOfYear[viewDate.getMonth()]} ${viewDate.getFullYear()}`}</span>
                    <TextField
                        style={{marginLeft: -130, zIndex:0}}
                        type="date"
                        defaultValue={viewDate}
                        onChange={(date) => {
                            setViewDate(new Date(date.target.value))
                        }}
                        variant="standard"
                    />
                </div>


                <br />

                <span className={classes.TextBox}>
                    Assign
                </span>

                <br />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Service</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={service_}
                        onChange={(event) => setServive(event.target.value)}
                        label="Service"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        {
                            services.map(service => <MenuItem key={service.id} value={service.id}>{service.service}</MenuItem>)
                        }
                    </Select>
                </FormControl>


                <br />
                <span className={classes.TextBox}>
                    To
                </span>
                <br />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Employee</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={employee_}
                        onChange={(event) => setEmployee(event.target.value)}
                        label="Employee"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        {
                            employees.map(employee => <MenuItem key={employee.id} value={employee.id}>{employee.employee}</MenuItem>)
                        }
                    </Select>
                </FormControl>

                <br/>

                <Button
                    variant="contained"
                    // color="primary"
                    className={classes.sendButton}
                    endIcon={<SendIcon />}
                >
                    ASSIGN
                </Button>

            </div>


            

        </div>
    )
}

export default AddWorkOrder
