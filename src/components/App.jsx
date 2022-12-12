import { useState } from 'react'
import '/src/assets/styles/App.css'
import Button from './Button'
import {Title, Watermark} from './Marks'


function App() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(1)
  const [active, setActive] = useState(1)

  const sumar = () => setCount(count + amount)
  const restar = () => setCount(count - amount)
  const restart = () => setCount(0)
  const isActive = (num) => active === num ? 'active' : "";

  return (
    <>
    <Title />
    <div className='container'>
      <div className='container__count'>{count}</div>
      <Button sumar={sumar} restart={restart} restar={restar} setAmount={setAmount} setActive={setActive} active={active} isActive={isActive} />
    </div>
    <Watermark />
    </>
  )
}

export default App