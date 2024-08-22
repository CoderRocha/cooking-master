import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        default: 
        return state
    }
}

export function ThemeProvider ({ children }) {
    const [state, dispach] =useReducer(themeReducer, {
        color: '#58429c'
    })

    const changeColor = (color) => {
        dispach({ type: 'CHANGE_COLOR', payload: color })
    }

    // custom logic

    return (
        <ThemeContext.Provider value={{ ...state, changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}