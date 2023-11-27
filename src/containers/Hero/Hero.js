import React,  { useEffect , useRef} from 'react'
import {Card }from "../../components"
import "./Hero.css"
import AUlogo from '../../assets/AboutUs.svg'
import solutions from '../../assets/solutions.svg'
import careers from '../../assets/careers.svg'
import team from '../../assets/team.svg'
import blogs from '../../assets/blogs.svg'
import contactus from "../../assets/contactus.svg"
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

  const boxRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);


  useEffect(()=>{
      const background = boxRef.current;
      const card = cardRef.current;

        
      const texts = textRef.current;

      
      const tl1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
      const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

      tl.fromTo(
        card,
        { scale: 1, opacity: 1 },
        {x : 2500, scale: 3, opacity: 1, duration:10 }
      )
        

      ScrollTrigger.create({
        animation: tl,
        trigger: card,
        start: 'top top',
        end: 'bottom top',
        pin: background,
        onUpdate: (self) => {

          const progress = self.progress;
          const backgroundColor = `rgba(246, 241, 255, ${progress})`; // Adjust the alpha as needed
          background.style.backgroundColor = backgroundColor;
        },
        scrub: 5,

      });


    tl1.fromTo(
      texts,
      { scale: 1, opacity: 1 },
      {x : -2500, scale: 3, opacity: 1, duration:10 }
    )
      

    ScrollTrigger.create({
      animation: tl1,
      trigger: card,
      start: 'top top',
      end: 'bottom top',

      scrub: 5,

    });
      
  },[]); 

  return (
    <div className='hero-container' ref={boxRef}>
    
      <div className="text-container" ref={textRef}>
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
          <p >
          Discover How Our Services Transcend Industries, Delivering Excellence Every Time.
          </p>
        </div>
      </div>
      <div className = "cards-container" ref= {cardRef}>
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
