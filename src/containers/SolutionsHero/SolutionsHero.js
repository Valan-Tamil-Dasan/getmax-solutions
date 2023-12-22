import React from 'react'
import './SolutionsHero.css'
import SH1 from '../../assets/SH1.svg'
import SH2 from '../../assets/SH2.svg'
import SH3 from '../../assets/SH3.svg'
import SH4 from '../../assets/SH4.svg'
import { NavBar } from '../../components'
import {Link as ScrollLink} from 'react-scroll'
const SolutionsHero = () => {
    
const ContactUS = ()=>{
    return (
      
      
        <div className= 'SH-contact-us-layout'>
        <a href="">
          <button className = "SH-contact-us-button">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>contact us</span>
          </button>
        </a>
        </div>
  
    )
  }
  return (
    <>
        <div className='SHcontainer'>
            <div className='SHleft'>
                <div ><p className='SHtitle'>Creative Solutions</p></div>
                <div ><p className='SHdesc'>Unlock success with <b> our tailored solutions </b>in healthcare, digital marketing, HR, training, and business consulting. Your growth journey, redefined and powered by innovation.</p></div>
                <ScrollLink to = "contact-us" spy = {true} smooth = {true} offset = {-81} duration = {700}><div className='SHcontact-us'><ContactUS/></div></ScrollLink>
            </div>
            <div className='SHright'>
                <div className='SHrightcol1'>
                    <div className='SHr-item'><img src={SH1} className='SHr-item-logo'/></div>
                    <div className='SHr-item'><img src={SH2} className='SHr-item-logo'/></div>
                </div>
                <div className='SHrightcol2'>
                    <div className='SHr-item'><img src={SH3} className='SHr-item-logo'/></div>
                    <div className='SHr-item'><img src={SH4} className='SHr-item-logo'/></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SolutionsHero