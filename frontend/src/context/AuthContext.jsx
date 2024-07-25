// context/AuthContext.jsx
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem('isAdmin') === 'true');

    const updateIsAdmin = (status) => {
        setIsAdmin(status);
        sessionStorage.setItem('isAdmin', status ? 'true' : 'false');
    };

    return (
        <AuthContext.Provider value={{ isAdmin, updateIsAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
