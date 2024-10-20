// src/components/AuthForm.jsx
import React, { useState } from "react";
import axios from "axios";

const AuthForm = ({ isLogin, onSuccess }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isLogin ? "http://localhost:3000/api/auth/login" : "http://localhost:3000/api/auth/register";
            const response = await axios.post(endpoint, formData);
            onSuccess(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    required
                />
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                {isLogin ? "Login" : "Register"}
            </button>
        </form>
    );
};

export default AuthForm;
