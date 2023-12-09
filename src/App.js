import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,Solutions, Team} from './pages'



const App = () => {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Team" element={<Team />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
