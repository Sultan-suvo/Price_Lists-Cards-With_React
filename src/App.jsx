import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceLists from './Components/PriceLists/PriceLists'
import Dashboard from './Components/Dashboard/Dashboard'
import PhoneBar from './Components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceLists></PriceLists>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
