import React from 'react'
import {Card }from "../../components"
import "./Hero.css"
import AUlogo from '../../assets/AboutUs.svg'
import solutions from '../../assets/solutions.svg'
import careers from '../../assets/careers.svg'
import team from '../../assets/team.svg'
import blogs from '../../assets/blogs.svg'
import contactus from "../../assets/contactus.svg"


const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="text-container">
        <div className = 'hero-title'>
          <p>
          GetMax<br/>Solutions
          </p>
        </div>
        <div className = 'hero-tag'>
          <p>
          From Tech Titans to Healthcare Heroes  We Serve Them All! 
          </p>
        </div>
        <div className = 'hero-desc'>
          <p>
          Discover How Our Services Transcend Industries, Delivering Excellence Every Time.
          </p>
        </div>
      </div>
      <div className = "cards-container">
        <div className = "single-line">
          <Card logo = {AUlogo} desc = "About us" />
          <Card logo = {solutions} desc = "Solutions" />
          <Card logo = {careers} desc = "Careers" />
        </div>
        <div className = "single-line">
          <Card logo = {team} desc = "Team" />
          <Card logo = {blogs} desc = "Blog" />
          <Card logo = {contactus} desc = "Contact Us" />
        </div>
      </div>
  </div>
  )
}

export default Hero

