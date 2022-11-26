import React, { useContext } from 'react'
import Switch from 'react-switch'
import {ThemeContext} from '../App';

function Title() {
  const {theme,setTheme} = useContext(ThemeContext);

  const toggleSwitch = ()=>{
    setTheme(
      theme === "Light" ? "Dark" : "Light"
    );
  }

  return (
    <header className={theme === "Dark"?"dark":"light"}>
        <span>Mode [{theme}]</span>
        <Switch
          onChange={toggleSwitch}
          checked = {theme === "Dark"}
          checkedIcon={false}
          uncheckedIcon={false}
        />
    </header>
  )
}

export default Title