import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { useJwt } from "react-jwt";
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { decodedToken, isExpired } = useJwt(sessionStorage.getItem('token'));
    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loggedInUser.email || !isExpired) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;