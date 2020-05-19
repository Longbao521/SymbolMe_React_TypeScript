import { createContext } from 'react'

export type ThemeType = 'dark' | 'light' | undefined

export interface ThemeContextType {
    theme: ThemeType;
    setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const initThemeContext: ThemeContextType = {
    theme: 'dark',
}

export const ThemeContext = createContext(initThemeContext)