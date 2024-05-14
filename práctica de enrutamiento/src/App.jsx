import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Bluered from './views/Bluered'
import Cuatro from './views/Cuatro'


function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:valor/:color/:backgroundColor' element={<Bluered />} />
        <Route path='/:valor' element={<Cuatro />} />
      </Routes>
    </>
  )
}

export default App
