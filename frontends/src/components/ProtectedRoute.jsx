import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    let isAuthenticated = false;

    if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        console.log(currentTime)

        // Check if token is expired
        if (decodedToken.exp > currentTime) {
            isAuthenticated = true;
        } else {
            // Token expired, remove it from localStorage
            localStorage.removeItem('token');
        }
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
