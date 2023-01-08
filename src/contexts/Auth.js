import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const token = localStorage.getItem("token"); 
    
    console.log(token); 

    return (
        <AuthContext.Provider value={{token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;