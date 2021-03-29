
import { Grid, Paper } from '@material-ui/core';
import {
    BrowserRouter as Router,Link} from "react-router-dom";
import React from 'react';
import './Header.css';
import image from '../../image/header.png';
import logo from  '../../image/logo.png'
const Header = () => {
    return (



    <div  style={{backgroundImage:`url(${image})`}} className="header">
      <nav>
          <ul>
              <li> <img className="logo" src={logo} alt=""/> </li>
              <li>
                  <Link to="/">Home</Link>
                </li>
         
               <li>
              <Link to="/booking">Booking</Link>
              </li>
               <li>
              <Link to="/blog">Blog</Link>
               </li>
               <li>
              <Link to="/privacypolicy">Privacypolicy</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
               </li>
             
       
          </ul>
      </nav>
      
      <div className="title-container">
          <h1>Burj - Al - Arab</h1>
          <h2>A global icon of Arab lazery</h2>
      </div>
    </div>



    );
};

export default Header;