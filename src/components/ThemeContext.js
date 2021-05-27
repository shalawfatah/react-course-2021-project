
import React, {createContext, useState} from 'react'

export const ThemeStore = createContext()

const ThemeProvidier = ({children}) => {
const [theme, setTheme] = useState(true)
    return (
        <ThemeStore.Provider value={[theme, setTheme]}>
            {children}
        </ThemeStore.Provider>
    )
}

export default ThemeProvidier
