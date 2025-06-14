import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Mood from './Mood'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Menu/>
      <Mood hari="senin" mood="senang"/>
      <Button/>
    </>
  )
}

export default App
