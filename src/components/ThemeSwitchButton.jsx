import React from 'react'
import { THEMES } from '../lib/constants'
import { ThemeContext } from '../lib/ThemeContext'

const ThemeSwitchButton = () => {

    const [currentTheme, setCurrentTheme] = React.useState(null)

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    React.useEffect(() => {
        console.log('ThemeSwitchButton theme:', theme)
        console.log('ThemeSwitchButton current theme:', currentTheme)
        document.documentElement.setAttribute(
            "data-theme",
            theme
        );
    }, [currentTheme])

    const handleThemeChange = (selectedTheme) => {
        toggleTheme(selectedTheme)
        setCurrentTheme(selectedTheme)
    }

    return (
        <>
            <button onClick={() => handleThemeChange(THEMES.LIGHT)}>LIGHT</button>
            <button onClick={() => handleThemeChange(THEMES.DARK)}>DARK</button>
            <button onClick={() => handleThemeChange(THEMES.GRAY)}>GRAY</button>
        </>
    )
}

export default ThemeSwitchButton