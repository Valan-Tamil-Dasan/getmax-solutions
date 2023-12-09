import React from 'react'
import './Solutions.css'
import { SolutionCard } from '../../components'
import arrowimg from '../../assets/arrowl.svg'
import mainimg from '../../assets/EmailMark.svg'
import contcreate from '../../assets/contcreate.svg'
import pay from '../../assets/pay.svg'
import seo from '../../assets/seo.svg'
import ssm from '../../assets/ssm.svg'
import arrowd from '../../assets/arrowd.svg'
import gmlogo from '../../assets/getMaxLogo.svg'


const Solutions = () => {
  return (
    <>
        <div className = "Solutions-cont" id = "solutions">
            <div ><p className='Solutions-title'>Our Solutions</p></div>
            <div className='Solutions-desc'><p className='Solutions-desc'>Your Success, Our Services. Tailored Solutions for Every Business Challenge. Discover the Power of Innovation and Excellence.</p> </div>
            <div className='Solutions-card-holder'>
            <div className='email-marketing'>
              <SolutionCard bgc = "#E0D1FF" pc =  "white" c = 'black' mainimg = {mainimg} arrowimg = {arrowimg} cont = "Email" cont2 = "Marketing"/>
            </div>
            <div className='social-media-card'>
              <SolutionCard bgc = "#191A23" pc =  "#E0D1FF" c = '#E0D1FF' mainimg = {ssm} arrowimg = {arrowd} cont = "Social Media" cont2 = "Marketing"/>
            </div>
            
            <div className='Solutions-content-creation'>
              <SolutionCard bgc = "#B266FF" pc =  "white" c = 'black' mainimg = {contcreate} arrowimg = {arrowimg} cont = "Content" cont2 = "Creation"/>
            </div>
            <div className='gmlogo-div'><img src={gmlogo} alt="" className='gmlogo'/></div>
           <div className='Solutions-seo'>
             <SolutionCard bgc = "#E0D1FF" pc =  "white" c = 'black' mainimg = {seo} arrowimg = {arrowimg} cont = "Search Engine" cont2 = "Optimization"/>
           </div>
            <div className='Solution-pay'>
              <SolutionCard bgc = "#B266FF" pc =  "white" c = 'black' mainimg = {pay} arrowimg = {arrowimg} cont = "Pay Per Click" cont2 = "Advertising"/> 
            </div>
           
            </div>



            <div className='Solutions-cont-mob'>
              <SolutionCard bgc = "#E0D1FF" pc =  "white" c = 'black' mainimg = {mainimg} arrowimg = {arrowimg} cont = "Email" cont2 = "Marketing"/>
              <SolutionCard bgc = "#191A23" pc =  "#E0D1FF" c = '#E0D1FF' mainimg = {ssm} arrowimg = {arrowd} cont = "Social Media" cont2 = "Marketing"/>
              <SolutionCard bgc = "#B266FF" pc =  "white" c = 'black' mainimg = {contcreate} arrowimg = {arrowimg} cont = "Content" cont2 = "Creation"/>
             <SolutionCard bgc = "#E0D1FF" pc =  "white" c = 'black' mainimg = {seo} arrowimg = {arrowimg} cont = "Search Engine" cont2 = "Optimization"/>
              <SolutionCard bgc = "#B266FF" pc =  "white" c = 'black' mainimg = {pay} arrowimg = {arrowimg} cont = "Pay Per Click" cont2 = "Advertising"/> 
            </div>
        </div>
    </>
  )
}

export default Solutions