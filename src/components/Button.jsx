import '../assets/styles/App.css'

function Button ( {sumar, restar, restart, setAmount, setActive, active, isActive} ) {
  return (
    <div className='container__pannel'>
      <div className='container__subpannel'>
        <button 
          className={isActive(1)} 
          onClick={() => {setAmount(1); setActive(1)}}>
          1
        </button>
        <button 
          className={isActive(2)} 
          onClick={() => {setAmount(2); setActive(2)}}>
          2
        </button>
        <button
          className={isActive(3)} 
          onClick={() => {setAmount(5); setActive(3)}}>
          5
        </button>
        <button
          className={isActive(4)}  
          onClick={() => {setAmount(10); setActive(4)}}>
          10
        </button>
      </div>
      <button className='container__button click' onClick={sumar}>
        Click
      </button>
      <button className='container__button restar' onClick={restar}>
        Substract
      </button>
      <button className='container__button restart' onClick={restart}>
        Restart
      </button>
    </div>
  )
}

export default Button