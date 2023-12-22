import React from 'react'
import  './Careers.css'
import Bc from './Assets/bc.svg'
import CarCard from './CarCards/CarCard'
import figma from './Assets/figma.svg'
import { default as CareersArray} from './CareersArray'
import Case from './Assets/case.svg'
import CH from './Assets/careers-hero.svg'
import {NavBar} from '../../components'
import {Contact} from '../../containers'

const Careers = () => {
  return (
    <div className='careers-main-cont'>
    <NavBar/>
      <div className='careers-main-hero'>
        <div className='carees-main-left'>
          <div className='careers-hero-title'>Innovate Your Future with GetMax</div>
          <div className='careers-hero-desc'>Embark on a rewarding journey with GetMax Solutions. Explore diverse career paths where innovation meets growth. Discover tailored opportunities for your skills and ambitions.
</div>
        </div>
        <div className='careers-hero-img'>
          <img src= {CH} className='careers-hero-img'/>
        </div>
      </div>
      <div className='Careers-dynamic-cont'>
           <div className='careers-title'>Latest Opportunities</div>
            <div className='careers-desc-row'>
              <div className='carrers-desc'>
              <div className='careers-desc-img'>
                <img src={Case} className=''/>
              </div>
              <div className='careers-desc-content'>
                <div className='careers-desc-num'>
                  160
                </div>
                <div className='careers-desc-job'>
                  Current job
                </div>
              </div>
            </div> 
        <div className='carrers-desc'>
              <div className='careers-desc-img'>
                <img src={Case} className=''/>
              </div>
              <div className='careers-desc-content'>
                <div className='careers-desc-num'>
                  49.65%
                </div>
                <div className='careers-desc-job'>
                  Placement Rate
                </div>
              </div>
            </div>
            <div className='carrers-desc'>
              <div className='careers-desc-img'>
                <img src={Case} className=''/>
              </div>
              <div className='careers-desc-content'>
                <div className='careers-desc-num'>
                  160
                </div>
                <div className='careers-desc-job'>
                  Vacant Positions
                </div>
              </div>
            </div>
      
            </div>
          <div className='carrers-postings'>
            {
            CareersArray.map((career,index)=>(
      
              <CarCard key = {index}
                job = {career.job}
                img = {figma}
                desc = {career.desc}
                price = {career.price}
                comp = {career.comp}
              />
      
            ))
           }
          </div>
      </div>
      <Contact/>
    </div>
  )
}

export default Careers