import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const loginLocal = localStorage.getItem("login");
    const loginDeserializado = JSON.parse(loginLocal)

    const [login, setLogin] = useState(loginDeserializado)
    localStorage.setItem("login", JSON.stringify(login))

    return (
        <AuthContext.Provider value={{ login, setLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;