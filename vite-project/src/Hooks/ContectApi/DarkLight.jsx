import React, { createContext, useState, use } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider=({children})=>{

    const [theme,settheme]=useState('dark');

    const HandleToggleTheme=()=>{
        return settheme((prevTheme)=> prevTheme === "dark" ? "light": "dark")
    }
return(
    <ThemeContext.Provider value={{theme , HandleToggleTheme}}>
{children}
    </ThemeContext.Provider>
)
}


/* create a componets */
export const DarkLight=()=>{
    const {theme , HandleToggleTheme}=use(ThemeContext);

    return(
        <div className='p-4 h-lvh flex flex-col justify-center items-center' style={{ background: theme === "dark" ? "#222" : "#fff", color: theme === "dark" ? "#fff" : "#000", padding: "1rem" }}>
              

            <h1 className=''>Dark Light Mode Website</h1>

            <p>Hello! My React v19 Fans</p>

          

                <button onClick={HandleToggleTheme}>
                {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                 </button>

        </div>
    )
}
