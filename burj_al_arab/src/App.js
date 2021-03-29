import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import React, {  createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import firebaseConfig from './Components/config';
import firebase from "firebase/app";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';
import Privacypolicy from './Components/Privacypolicy/Privacypolicy';
// import "firebase/auth";
 
 export const  UserContext = createContext();



firebase.initializeApp(firebaseConfig);

function App() {
  const [logedinUser, setLogedinUser] = useState({});
  console.log(" tHIS IS app.js", logedinUser);

  return (
    <UserContext.Provider value={[logedinUser, setLogedinUser]}>
      
    <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/privacypolicy">
            <Privacypolicy />
          </PrivateRoute>
          <Route path="/blog">
            <Blog />
          </Route>
          <PrivateRoute path="/booking">
              <Booking></Booking>
          </PrivateRoute>
     

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
    </UserContext.Provider>
 
   
    
  );
}

export default App;
