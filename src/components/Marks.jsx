import '../assets/styles/App.css'
import { AiFillHeart } from 'react-icons/all'

function Title () {
  return <h1 className='title'>Click Counter With React</h1>
}

function Watermark () {
  return <h3 className='watermark'><span>Made with</span> < AiFillHeart /> <span>by Facucarrion</span></h3>
}

export {Title, Watermark}