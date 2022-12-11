import { useState } from 'react'
import '/src/assets/styles/App.css'
import Button from './Button'


function App() {
  const [count, setCount] = useState(0)
  const sumar = () => setCount(count+1)
  const restar = () => setCount(count-1)
  const restart = () => setCount(0)
  return (
    <div className='container'>
      <div className='container__count'>{count}</div>
      <Button sumar={sumar} restart={restart} restar={restar}/>
    </div>
  )
}

export default App