import React from 'react';
import './Clients.css'

import {Card}  from '../../components';

import Header from './Header';
import Marquee from 'react-fast-marquee';

//Importing images

import graphy from './cli-images/image 842graphy.png';
import jamoons from './cli-images/WhatsApp Image 2023-11-29 at 19.21.30.jpeg';
import cloons from './cli-images/WhatsApp Image 2023-11-29 at 19.21.31.jpeg';
import blessed from './cli-images/4-removebg-preview 2blessed.png';
import culti from './cli-images/cultivators.png';
import timespro from './cli-images/Timespro_logo_8db0780773 1timespro.png';
import tessolve from './cli-images/tessolve.png';
import amazon from './cli-images/Company Logoamazon.png';
import koshys from './cli-images/koshys.png';
import meraki from './cli-images/GETMAX HR RPO 3meraki.png';
import marina from './cli-images/image 841marina_club.png';
import sa from './cli-images/sacollege.png';
import symbiosis from './cli-images/image 839symbiosis.png';
import satya from './cli-images/oxford.png';
import new1 from './cli-images/new.png';

const Carousel = () => {


  return (
    <>
    <Header/>

<div className="clients-section-container">
<div className="cli-col">
 <div className='cli-colHeader'>
  <h3 className="cli-head3">
    Technology Partners 
  </h3>
 </div>
    <div className='marq1' >
     {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}
        <Marquee direction='up' behaviour = "scroll"  className='mark' >{/* use it to adjust height */}
                  <div   className="marquee-item">
                  <Card logo = {graphy}   />
                  </div>
                  <div  className="marquee-item">
                  <Card logo = {jamoons}  />
                  </div>
                   <div  className="marquee-item">
                  <Card logo = {cloons}  />
                  </div>
                  <div   className="marquee-item">
                  <Card logo = {blessed} />
                  </div>
                  <div   className="marquee-item">
                  <Card logo = {new1}  />
                  </div>

        
              </Marquee>

    </div>
    </div>
    <div className="cli-col">
 <div className='cli-colHeader'>
  <h3 className="cli-head3">
    Training and Placements
  </h3>
 </div>
    <div className='marq1'> {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}
 
<Marquee direction='down' behaviour = "scroll"  className='mark'>{/* use it to adjust height */}

          <div   className="marquee-item">
          <Card logo = {culti}  />
          </div>
          <div  className="marquee-item">
          <Card logo = {timespro}  />
          </div>
           <div  className="marquee-item">
          <Card logo = {tessolve}  />
          </div>
          <div   className="marquee-item">
          <Card logo = {amazon}  />
          </div>
       


      </Marquee>

</div> 
</div>
 <div className="cli-col">
 <div className='cli-colHeader'>
  <h3 className="cli-head3">
    Digital Services
  </h3>
 </div>
   <div className='marq1'> {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}

<Marquee direction='up' behaviour = "scroll"  className='mark'>{/* use it to adjust height */}

          <div   className="marquee-item">
          <Card logo = {koshys}  />
          </div>
          <div  className="marquee-item">
          <Card logo = {meraki}  />
          </div>
           <div  className="marquee-item">
          <Card logo = {cloons} />
          </div>
          <div   className="marquee-item">
          <Card logo = {marina}  />
          </div>
          


      </Marquee>

</div>  
</div>
         <div className="cli-col">
 <div className='cli-colHeader'>
  <h3 className="cli-head3">
    Educational Institutes
  </h3>
 </div>
 <div className='marq1'> {/* use this div for changing the postion of the marquee column like margin and stuff  copy it and change the margin to setup the next marquee*/}
 
<Marquee direction='down' behaviour = "scroll"  className='mark'>{/* use it to adjust height */}

          <div   className="marquee-item">
          <Card logo = {koshys}  />
          </div>
          <div  className="marquee-item">
          <Card logo = {sa}  />
          </div>
           <div  className="marquee-item">
          <Card logo = {symbiosis}/>
          </div>
          <div   className="marquee-item">
          <Card logo = {satya}  />
          </div>
         


      </Marquee>

</div>
</div>

         
</div>
<div className='cli-cont-mob'>
   
  <div className='cli-marq-pair'>

    <div className='cli-row-one'>
    
      <div className='marq-mob' >
      <Marquee direction='right' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
                    <div   className="marquee-item">
                    <Card logo = {graphy}   />
                    </div>
                    <div  className="marquee-item">
                    <Card logo = {jamoons}  />
                    </div>
                     <div  className="marquee-item">
                    <Card logo = {cloons}  />
                    </div>
                    <div   className="marquee-item">
                    <Card logo = {blessed} />
                    </div>
                    <div   className="marquee-item">
                    <Card logo = {new1}  />
                    </div>
    
                </Marquee>
      </div>
    </div>
  </div>
  <div className='cli-row'>
    <div className='marq-mob' >
    <Marquee direction='left' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
    

        <div   className="marquee-item">
        <Card logo = {koshys}  />
        </div>
        <div  className="marquee-item">
        <Card logo = {sa}  />
        </div>
        <div  className="marquee-item">
        <Card logo = {symbiosis}/>
        </div>
        <div   className="marquee-item">
        <Card logo = {satya}  />
        </div>





        
              </Marquee>
    </div>
  </div>
  <div className='cli-row'>
    <div className='marq-mob' >
    <Marquee direction='right' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
                  
          <div   className="marquee-item">
          <Card logo = {koshys}  />
          </div>
          <div  className="marquee-item">
          <Card logo = {meraki}  />
          </div>
           <div  className="marquee-item">
          <Card logo = {cloons} />
          </div>
          <div   className="marquee-item">
          <Card logo = {marina}  />
          </div>

        
              </Marquee>
    </div>
  </div> <div className='cli-row'>
    <div className='marq-mob' >
    <Marquee direction='left' behaviour = "scroll"  className='mark-mob' >{/* use it to adjust height */}
    
    <div   className="marquee-item">
          <Card logo = {culti}  />
          </div>
          <div  className="marquee-item">
          <Card logo = {timespro}  />
          </div>
           <div  className="marquee-item">
          <Card logo = {tessolve}  />
          </div>
          <div   className="marquee-item">
          <Card logo = {amazon}  />
          </div>

        
              </Marquee>
    </div>
  </div>
  
</div>

</>
  );
};

export default Carousel;


