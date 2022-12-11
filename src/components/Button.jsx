import '../assets/styles/App.css'

function Button ( {sumar, restar, restart} ) {
  return (
    <div className='container__pannel'>
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