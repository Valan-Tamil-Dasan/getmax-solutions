import React from 'react'
import { NavBar ,Card } from './components'
import { Hero , About} from "./containers"


const App = () => {
  return (
    <>
      <Hero/>
      <NavBar/>
      <About/>

    </>
  )
}

export default App
