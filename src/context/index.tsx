import { createContext } from 'react'

export type ThemeType = 'dark' | 'light' | undefined

export interface ThemeContextType {
    theme: ThemeType;
    switchTheme: () => void;
}

const initThemeContext: ThemeContextType = {
    theme: 'dark',
    switchTheme: () => {}
}

export const ThemeContext = createContext(initThemeContext)