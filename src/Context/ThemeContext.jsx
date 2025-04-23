import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeProvider = createContext()

const ThemeContext = ({ children }) => {
    const [theme, settheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    return (
        <>
            <ThemeProvider.Provider value={[theme, settheme]}>
                {children}
            </ThemeProvider.Provider>
        </>
    )
}
export default ThemeContext

export const useTheme = () => useContext(ThemeProvider)
