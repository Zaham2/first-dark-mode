import React from 'react'
import ProfileCard from './components/ProfileCard'
// import { ThemeContext } from './lib/ThemeProvider'
import { THEMES } from './lib/constants'
import ThemeSwitchButton from './components/ThemeSwitchButton'
// import { ThemeContext } from './lib/ThemeContext'

function App() {

  return (
    <>
      <ProfileCard />
      <ThemeSwitchButton />
    </>
  )
}

export default App
