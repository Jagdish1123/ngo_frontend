import React from "react";
import { useAuth } from "./store/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate=useNavigate();

    const handleLogout = () => {
        logout();
        // Optionally navigate to a different page after logout
       navigate('/login');
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;
