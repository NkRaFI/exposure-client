import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import logoMain from '../../images/main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const newUser = { name: displayName, email }
                setLoggedInUser(newUser);
                storeAuthToken();
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                .then(function (idToken) {
                    sessionStorage.setItem('token', idToken);
                    history.replace(from);
                }).catch(function (error) {
                    // Handle error
                });
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center my-5">
                <h3 className="logo mb-5"> Exposure <img src={logoMain} alt=""/></h3>
                <div>
                    <h3 className="mb-4">Login With</h3>
                    <button onClick={handleGoogleLogin} className="customBtn"><FontAwesomeIcon className="me-2" icon={faGoogle} /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;