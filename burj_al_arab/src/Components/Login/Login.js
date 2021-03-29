import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {

    const [logedinUser, setLogedinUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    console.log('This is ligin js', logedinUser)
    const [newUser, setUser] = useState({});
    let { displayName, email, photoURL } = newUser;
    const handleGoogleSignin = () => {

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                // var user = result.user;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                // const newUserInfo = {...user};
                // let  {displayName, email, photoURL} = newUser;
                setUser(signedInUser);
                setLogedinUser(signedInUser);
                storeAuthToken();
                // console.log(user.displayName)
                // console.log(user)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage)
            });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });

    }
    return (
        <div>

            <h1>Your name is : {displayName}</h1>
            <button onClick={handleGoogleSignin}>Google</button>




        </div>
    );
};

export default Login;