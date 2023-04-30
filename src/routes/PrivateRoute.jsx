import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;

/* 
1. check use is logged in or not
2. if use is logged in then visit the route
3. else redirect user to the login page
4. set up the private router
5. handleLoading
*/