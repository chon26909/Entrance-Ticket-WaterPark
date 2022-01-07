import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const user = {
    loggedIn: true
}

const useAuth = () => {
    return user && user.loggedIn;
}

const ProtectedRoute = () => {
    
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
