import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './components/home'
import Base from './components/base'
import Order from './components/order'
import Toppings from './components/toppings'
import Header from './components/header'
import bg  from './assets/pngwing..png'
import {motion} from 'framer-motion'
function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    
    
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/base' element={<Base/>}/>
      <Route path='/toppings' element={<Toppings/>}/>
      <Route path='/Order' element={<Order/>}/>

    </Routes>
    
    </>
  )
}

export default App
