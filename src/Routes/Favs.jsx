import React from 'react'
import Card from '../Components/Card'
import { themeContext } from '../Context/themeContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Favs = () => {
  const dentistList = useContext(context)
  const theme = useContext(themeContext)
  return (
    <main className = "">
      <h1>Favs</h1>
      <div className='card-grid'>
        {dentistList.map((dentist) => (
          <Card
          key ={dentist.id}
          name = {dentist.name}
          username = {dentist.username}
          id = {dentist.id}
          />

        ))}
      </div>
    </main>
  )
}

export default Favs