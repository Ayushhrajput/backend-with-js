import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        () => {
            const getUser = localStorage.getItem("user")
            return getUser? JSON.parse(getUser): null
        }
    )

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}