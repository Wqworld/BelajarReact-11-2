import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Mood from './Mood'
import Button from './Button'
import ChildComponent from './ChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const [nama, setNama] = useState("waqqir")

  function namaHandler() {
    let namaChanel = ""
    if( nama == 'waqqir'){
      namaChanel = 'rumahrafif'
    }else{
      namaChanel = 'waqqir'
    }
    setNama(namaChanel)
    console.log('namaChanel')
  }

  return (
    <>
      <Header/>
      <Menu/>
      <Mood hari="senin" mood="senang"/>
      <Mood hari="selasa" mood="senang"/>
      <Mood hari="rabu" mood="senang"/>
      <Mood hari="Kamis" mood="senang"/>
      <Mood hari="jumat" mood="senang"/> 
      <Button/>
      <ChildComponent nama={nama}/>

      <button onClick={namaHandler}> ganti nama chanel</button>
    </>
  )
}

export default App
