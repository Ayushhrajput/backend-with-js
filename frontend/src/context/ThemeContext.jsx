import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)
    
    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}