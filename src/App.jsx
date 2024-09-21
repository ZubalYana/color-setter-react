import './App.css'
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'
import Controlls from './components/Controlls/Controlls.jsx'
import { useState } from 'react'
function App() {

  const [color, setColor] = useState('black');

  const onColorChange = (color) => {
    setColor(color)
  }

  return (
    <div className="wrap">
      <Header />
      <Content textColor={color}/>
      <Controlls onColorChange={setColor} />
    </div>
  )
}

export default App
