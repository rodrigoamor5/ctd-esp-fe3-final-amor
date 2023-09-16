import React from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from '../Context/themeContext'
import {themeProvider} from '../Context/themeProvider'
import { useContext } from 'react'
import ThemeContext from '../Context/context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({Children}) => {

  const [theme, newTheme] = useContext(themeContext)


  return (
    <div className = '' >
      <nav>
        <ul>
        <li><Link exact to="/home">Home</Link></li>
        <li><Link exact to="/favs">Favs</Link></li>
        <li><Link exact to="/contact">Contact</Link></li>
        </ul>
        <button onClick = {newTheme} className = 'themeButton'> Noche </button>
      </nav>\
    </div>
  )
}

export default Navbar