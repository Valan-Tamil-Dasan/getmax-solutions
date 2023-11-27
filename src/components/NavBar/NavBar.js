import React from 'react'
import logo from "../../assets/Group.png"
import "../NavBar/NavBar.css"
const NavBar = () => {
  return (
    <div className = "nav-bar-container">
      <div className = "nav-bar-logo">
        <img src = {logo}/>
      </div>
      <div className = "nav-bar-pages">
        <p className='nav-bar-tabs'>Home</p>
        <p className='nav-bar-tabs'>About Us</p>
        <p className='nav-bar-tabs'>Our Solutions</p>
        <p className='nav-bar-tabs'>Team</p>
        <p className='nav-bar-tabs'>Blogs</p>
        <p className='nav-bar-tabs'>Careers</p>
      </div>
      <div className= 'nav-bar-contact-us-layout'>
      <button className = "nav-bar-contact-us-button">
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
      </div>
    </div>
  )
}

export default NavBar