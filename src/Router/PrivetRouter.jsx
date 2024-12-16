import React, { useContext } from 'react';
import AuthContext from '../context/authContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const location = useLocation()

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivetRouter;