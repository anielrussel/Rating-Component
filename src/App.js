import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Rating, Thanks } from './components'

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Rating />} />
        <Route path='/thanks' element={<Thanks />} />
      </Route>
    </Routes>
  )
}

export default App