import React, { useEffect, useState } from 'react'

import { TextField } from '@material-ui/core';
import axios from 'axios';
import { toggleAddWorkOrder } from '../../store/actions/triggers'


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux';


import Loader from '../loader/loader'
import { Toaster } from 'react-hot-toast';

import Toast from '../Toast/toast';


import classes from './add-workorder.module.css'

const daysOfWeek = ["Sun", "Mon", "Tue", "wed", "Thur", "Fri", "Sat"]
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


function AddWorkOrder(props) {
    const { triggers } = useSelector(state => state.triggers)
    const dispatch = useDispatch()

    const [viewDate, setViewDate] = useState(new Date())
    const [service_, setServive] = useState('');
    const [employee_, setEmployee] = useState('');
    const [employees, setEmployees] = useState([])
    const [services, setServices] = useState([])

    useEffect(() => {
        setServices(triggers.services)
        setEmployees(triggers.employees)
    }, [])
  
    const handleAssign = () => {
        if(!localStorage.getItem("EMAIL")){
            Toast("Enter your email in the form provided and Click Enter", "error");
            dispatch(toggleAddWorkOrder())
            return
        }
        if(!employee_){
            Toast("Select an employee", "error");
            return
        }
        if(!service_){
            Toast("Select a service", "error");
            return
        }

        const data = JSON.stringify({
            "serviceId": service_,
            "customer_email": localStorage.getItem("EMAIL"),
            "employeeId": employee_,
            "startTime": viewDate.toISOString()
        })

        console.log("add workorders :> ")

        const config = {
          method: 'post',
          url: `${process.env.REACT_APP_BASE_URL}/add/workorder`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (res) {
            //   console.log(JSON.stringify(res.data));
            console.log("work orders for date :> ", res)
            if(res.data.status == "success"){
                Toast("Successfully Added Workorder", "success");
            }else{
                Toast(res.data.message, "error");
            }
        })
        .catch(function (error) {
            Toast(error, "error");
        });

        dispatch(toggleAddWorkOrder())

    }

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
                    onClick={() => handleAssign()}
                >
                    ASSIGN
                </Button>

            </div>


            
            <Toaster />
        
        </div>
    )
}

export default AddWorkOrder
