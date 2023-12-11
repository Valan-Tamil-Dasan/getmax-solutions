import React from 'react'
import './Innovation.css'
import Innovationimg from '../../assets/innovation.svg'

const Innovation = () => {
  return (
    <div className='Innovation-div'>
        <div className='Inno-img'> <img src={Innovationimg} className='Inno-img'/></div>
        <div className='Inno-tag'>Unleashing Unique Solutions for our Success Story</div>
        <div className='Inno-title'>Innovation Defines Us</div>
        <div className='Inno-desc'>Unique in our innovative prowess, we craft tailored solutions across diverse services. Our approach blends creativity and precision, ensuring your success journey is distinctly extraordinary</div>
    </div>
  )
}

export default Innovation