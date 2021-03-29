import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const  [logedinUser, setLogedinUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/bookings?email='+logedinUser.email,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setBookings(data));
    },[])

    return (
        <div>
            <h3>you have{bookings.length}</h3>
            {
                bookings.map(book => <li key={book._id}>{book.name} From : {new Date(book.checkIn).toDateString('dd/MM/yyyy')} To : {new Date(book.checkOut).toDateString('MM/dd/yyyy')}</li>)
            }
        </div>
    );
};

export default Bookings;