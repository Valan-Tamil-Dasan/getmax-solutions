import React from 'react'
import { Hero , About ,Contact  , Team,Solutions ,Clients} from "../containers"

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Clients/>
        <Solutions/>
        <Team/>
        <Contact/>
    </>
  )
}

export default Home