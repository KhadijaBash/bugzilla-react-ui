import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import AllRoutes from './routes'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {AllRoutes}
      </BrowserRouter>
    </div>
  )
}

export default App
