import React from 'react'
import { Innovation, SolutionsHero,SHRC} from '../containers'
import{ Contact }from '../containers'
import { RiInboxUnarchiveFill } from 'react-icons/ri'
import { NavBar } from '../components'

const Solutions = () => {
  return (
    <div>
        <NavBar/>
        <SolutionsHero/>
         <Innovation/>
        <SHRC/>
        <Contact/> 

    </div>
  )
}

export default Solutions