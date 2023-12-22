import React from 'react'
import Health from './healthcare'
import { NavBar } from '../../components'
import { Contact } from '../../containers'
const USRCM = () => {
  return (
    <div>
        <NavBar/>
        <Health/>
        <Contact/>
    </div>
  )
}

export default USRCM