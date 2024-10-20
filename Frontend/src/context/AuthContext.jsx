// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Check if tokens exist in cookies to set authentication status
	useEffect(() => {
		const accessToken = Cookies.get("accessToken");
		setIsAuthenticated(!!accessToken);
	}, []);

	const login = () => setIsAuthenticated(true);
	const logout = () => {
		Cookies.remove("accessToken");
		Cookies.remove("refreshToken");
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
