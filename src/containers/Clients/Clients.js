import React from 'react';
import './Clients.css'

import {Card}  from '../../components';
import contactus from '../../assets/contactus.svg'
import Marquee from 'react-fast-marquee';

const Carousel = () => {


  return (
<div className="clients-section-container">
    <div className='marq1'> {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}

        <Marquee direction='up' behaviour = "scroll"  className='mark'>{/* use it to adjust height */}
        
                  <div   className="marquee-item">
                  <Card logo = {contactus} desc = "Contsdfgact Us" />
                  </div>
                  <div  className="marquee-item">
                  <Card logo = {contactus} desc = "Contact Us" />
                  </div>
                   <div  className="marquee-item">
                  <Card logo = {contactus} desc = "nigUs" />
                  </div>
                  <div   className="marquee-item">
                  <Card logo = {contactus} desc = "Contsdfgact Us" />
                  </div>
                  <div   className="marquee-item">
                  <Card logo = {contactus} desc = "email us" />
                  </div>

        
              </Marquee>

    </div>
         
</div>

  );
};

export default Carousel;