import { useState } from 'react'
import '../assets/styles/App.css'

function App() {
const names = ['Facundo Carrion', 'Giancarlo Franco', 'Fran']
  return names.map(e => <Title name={e}/>)
}

function Title({name}) {
  return <h1>{name}</h1>
}

export default App