import React from 'react'
import { Hero , About ,Contact  , Team,Solutions ,Clients} from "../containers"

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Solutions/>
        <Clients/>
        <Team/>
        <Contact/>
    </>
  )
}

export default Home