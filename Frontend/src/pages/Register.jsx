// src/pages/Register.jsx
import React from "react";
import AuthForm from "../components/AuthForm";

const Register = ({ onRegisterSuccess }) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-4">Register</h1>
            <AuthForm isLogin={false} onSuccess={onRegisterSuccess} />
        </div>
    );
};

export default Register;
