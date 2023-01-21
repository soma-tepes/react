import { useState } from 'react'

import './App.css'
import Count from './assets/component/Count'
import Switch from './assets/component/Switch'

function App() {
  const [count, setCount] = useState(0)
  const [enc, estado] = useState(false)

  return (
    <div className="App">
    <Count contador={count} acumulador={setCount} />
    <Switch prende ={enc} acumulador ={estado}/>
    </div>
  )
}

export default App
