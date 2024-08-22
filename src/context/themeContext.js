import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default: 
        return state
    }
}

export function ThemeProvider ({ children }) {
    const [state, dispach] =useReducer(themeReducer, {
        color: '#58429c',
        mode: 'dark'
    })

    const changeColor = (color) => {
        dispach({ type: 'CHANGE_COLOR', payload: color });
    }
    const changeMode = (mode) => {
        dispach({ type: 'CHANGE_MODE', payload: mode })
    }

    // custom logic

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}