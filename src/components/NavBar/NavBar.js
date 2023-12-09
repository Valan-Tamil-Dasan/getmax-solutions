import React ,{useState} from 'react'
import logo from "../../assets/getMaxLogo.svg"
import "../NavBar/NavBar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {Link} from "react-scroll"



const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = ()=>{
    return (      
      <div className = "nav-bar-pages">
        <Link to = "hero" spy = {true} smooth = {true} offset = {50} duration = {700}>
          <p className='nav-bar-tabs'>Home</p>
        </Link>
        <Link to = "about-us" spy = {true} smooth = {true} offset = {-50} duration = {700}>
          <p className='nav-bar-tabs'>About Us</p>
        </Link>
        <Link to = "solutions" spy = {true} smooth = {true} offset = {20} duration = {700}>
          <p className='nav-bar-tabs'>Our Solutions</p>
        </Link>
        <Link to = "team" spy = {true} smooth = {true} offset = {-70} duration = {700}>
          <p className='nav-bar-tabs'>Team</p>
        </Link>
        <p className='nav-bar-tabs'>Blogs</p>
        <p className='nav-bar-tabs'>Careers</p>
      </div>)
  }

const ContactUS = ()=>{
  return (
    
    
      <div className= 'nav-bar-contact-us-layout'>
      <Link to = "contact-us" spy = {true} smooth = {true} offset = {-81} duration = {700}>
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
      </Link>
      </div>

  )
}

  return (
    <div className = "nav-bar">
      <div className = "nav-bar-container">
        <div className = "nav-bar-logo">
          <img src = {logo} className="nav-bar-logo-img"/>
        </div>
        <Menu/>
        <ContactUS/>
        <div className = "toggle-menu">
        {toggleMenu
          ? <RiCloseLine color="#486284" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#486284" size={27} onClick={() => setToggleMenu(true)} />}
        </div>
      
      </div>
      <div className='toggle-dd'>
        {toggleMenu && (
          <div className="toggle">
          <p className='nav-bar-tabs'>Home</p>
            <p className='nav-bar-tabs'>About Us</p>
            <p className='nav-bar-tabs'>Our Solutions</p>
            <p className='nav-bar-tabs'>Team</p>
            <p className='nav-bar-tabs'>Blogs</p>
            <p className='nav-bar-tabs'>Careers</p>
            <p className='nav-bar-tabs'>Contact Us</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default NavBar

