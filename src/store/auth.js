import { createContext, useState, useContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(localStorage.getItem("token") || null);

    // Function to store the token in localStorage and update state
    const StoreToken = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setAuth(serverToken);
    };

    // Function to clear the token from localStorage and reset state
    const logout = () => {
        localStorage.removeItem("token");
        setAuth(null);
    };

    // Function to check if a user is logged in
    const isLogged = () => {
        return !!auth; // Returns true if auth is not null or undefined
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, StoreToken, logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
