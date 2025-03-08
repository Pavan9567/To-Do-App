import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className="text-end mb-3">
            {isAuthenticated ? (
                <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
            ) : (
                <button className="btn btn-primary" onClick={() => navigate('/')}>Login</button>
            )}
        </div>
    );
};

export default Auth;