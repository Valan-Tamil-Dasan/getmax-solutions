import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import {Home,Solutions, Team ,Business,Careers,Digital,US} from './pages'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
}



const App = () => {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
      <Route path="/Solutions" element={<Solutions />} />
            <Route path="/" element={<Home />}/> <Route path="/Solutions/business-consulting" element={<Business />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Solutions/digital-marketing" element={<Digital />} />
            <Route path="/Solutions/us-rcm" element={<US />} />
            <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
