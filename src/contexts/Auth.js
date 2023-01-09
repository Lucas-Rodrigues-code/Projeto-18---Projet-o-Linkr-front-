import React, { createContext, useState } from "react";
export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const token = localStorage.getItem("token"); 
    const [myToken,setMytoken] = useState()
    console.log(token); 
    console.log('TOKEN ATUAL',myToken)
    return (
        <AuthContext.Provider value={{token,myToken,setMytoken}}>

            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;