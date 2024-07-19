import React from 'react'
import { ThemeContext } from './ThemeContext'
import { THEMES } from './constants'

const ThemeProvider = ({ children }) => {


  const [theme, setTheme] = React.useState(THEMES.LIGHT)

  const toggleTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider