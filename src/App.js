import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,Solutions, Team ,Business,Careers,Digital,US} from './pages'



const App = () => {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Solutions/business-consulting" element={<Business />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Solutions/digital-marketing" element={<Digital />} />
          <Route path="/Solutions/us-rcm" element={<US />} />
          <Route path="/Team" element={<Team />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
