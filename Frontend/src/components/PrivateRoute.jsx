// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ element }) => {
    const { user } = useAuth(); // Assumes your AuthContext has a user object

    return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
