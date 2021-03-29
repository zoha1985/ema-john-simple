import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { NewReleasesSharp } from '@material-ui/icons';




import { Button } from '@material-ui/core';
import Bookings from '../Bookings/Bookings';

const Booking = () => {
    const [logedinUser, setLogedinUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDate = {...selectedDate}
        newDate.checkIn = date;
      setSelectedDate(newDate);
    };
    
    const handleCheckOutDate = (date) => {
        const newDate = {...selectedDate}
        newDate.checkOut = date;
      setSelectedDate(newDate);
    };
    const handleBooking = () => {
        // console.log('booking handle')
        const newBooking = {...logedinUser, ...selectedDate};

        console.log('This is newBooking result', newBooking);

        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
               
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }
    return (
        <div>
            <h1>This is booking page</h1>
            <h4> Your name is : {logedinUser.displayName} </h4>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label=" Check In Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Ckeck Out Date "
                        format="MM/dd/yyyy"
                        value={selectedDate.checkOut}
                        onChange={handleCheckOutDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Button onClick={handleBooking}  variant="contained" color="primary"> Book Now</Button>
            </MuiPickersUtilsProvider>
            <Bookings />
        </div>
    );
};

export default Booking;