import React, { useContext } from 'react'
import Light from '../assets/light.svg'
import Dark from '../assets/dark.svg'
import {ThemeContext} from '../App'

function Content() {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <main className={theme === 'Dark'?'dark':'Light'}>
      <div>
        <h1>{theme} Website</h1>
        <p>Practice by doing</p>
      </div>
      <img src={theme === 'Dark'?Dark:Light} alt="Logo" />
    </main>
  )
}

export default Content