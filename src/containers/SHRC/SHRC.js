import React from 'react'
import RCM from '../../assets/rcm.svg'
import Arrow from '../../assets/readmore.svg'
import DS from '../../assets/digitalsol.svg'
import scar from '../../assets/scar.svg'
import business from '../../assets/asdgfasdffds.svg'
import Inno from '../../assets/nigg.svg'
import './SHRC.css'
import {Link} from 'react-router-dom'

const SHRC = () => {
  return (
    
    <div className='Solutionsall-container'>
        <div className='S-hrc'>
            <div className='SHRC-top'>
                <div className='SHRC-left'>
                    <div className='SHRC-dash'></div>
                    <div className='SHRC-title'>Revolutionizing Healthcare Revenue Cycle</div>
                    <div className='SHRC-desc'>Optimize revenue cycles in U.S. healthcare for efficiency, accuracy, and profitability</div>
                    <Link to = '/Solutions/us-rcm'>
                        <div className='SHRC-read'>
                            <div>Read more</div>
                            <div>
                                <img src={Arrow} className='shrc-arrow' />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='SHRC-center'>
                    <img src={RCM} className='SHRC-center' />
                </div>
                <div className='SHRC-right'>
                    <div className='SHRC-box'><p className='SRHC-box-text'>Precision and prosperity in redefined healthcare finances.</p></div>
                    <div className='SHRC-box'><p className='SRHC-box-text'>Expert navigation for billing precision and revenue mastery</p></div>
                </div>
            </div>
            <div className='SHRC-bottom'>
            Implemented automated claims processing, reducing errors by 30% and accelerating
            reimbursement cycles, optimizing revenue for clients
            </div>
        </div>





       <div className='S-digital-growth'>
            
        <div className='Sdg-top'>
                <div className='Sdg-left'>
                <div className='SHRC-box'><p className='SRHC-box-text'>Strategic Sparks: Igniting Digital Impact with Innovative Brilliance</p></div>
                    <div className='SHRC-box'><p className='SRHC-box-text'>Impactful Digital Strategies Redefined for Unmatched Brilliance.</p></div>
                   
                </div>
                <div className='Sdg-center'>

                    <div className='SHRC-dash'>

                    </div>

                        <div className='SHRC-title'>Driving Digital Growth with Precision</div>

                        <div className='SHRC-desc'>Strategic digital solutions fueling growth, engagement, and success for businesses with innovative precision.</div>
                        <Link to = "/Solutions/digital-marketing">
                            <div className='SHRC-read'>
                                <div>Read more</div>
                                <div>
                                    <img src={Arrow} className='shrc-arrow' />
                                </div>
                            </div>
                        </Link>
                </div>
                
                <div className='Sdg-right dg-img'>
                    <img src={DS} className='dg-img' />
                </div>
            </div>

            <div className='SHRC-bottom'>
            Highlights-Elevated brand visibility through targeted SEO and social media campaigns, resulting in a 40% increase in online engagement of our clients.
            </div>
        

        </div>





        <div className='S-carreers'>
            <div className='SHRC-top'>
                <div className='Scar-t-left'>
                <div className='SHRC-dash'></div>
                    <div className='Scar-title '>Empowering Careers, Fueling Futures</div>
                    <div className='Scar-desc'>Transformative training and placement services sculpting careers for lasting success + industry impact</div>
                    <Link to = "/Solutions/empowering-careers">
                        <div className='SHRC-read'>
                            <div>Read more</div>
                            <div>
                                <img src={Arrow} className='shrc-arrow' />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='car-img'>
                <img src={scar} className='car-img' />
                </div>
             </div>

            <div className='Scar-center'> 
                <div className='SHRC-box'><p className='SRHC-box-text'>Empower precision Training, Strategic Placement, Lasting Success.</p></div>
                <div className='SHRC-box'><p className='SRHC-box-text'>Navigate precision Training, Strategic Placement, Professional Excellence.</p></div>
            </div>
            <div className='Scar-bottom'>
            Facilitated career transitions with personalized training, resulting in 90% placement success and skilled workforce alignment for client organizations.
            </div>
        </div>

        
         <div className='S-business'>
            <div className='SHRC-top'>
            <div className='SHRC-right'>
                    <div className='SHRC-box'><p className='SRHC-box-text'>Foster HR RPO Mastery, Workforce Excellence, Success Unveiled.</p></div>
                    <div className='SHRC-box'><p className='SRHC-box-text'>Strategic sourcing Talent, Workforce Excellence, Success Unveiled.</p></div>
                </div>
                <div className='business-center'>
                <img src={business} className='business-center' />
                </div>
                <div className='SHRC-left'>
                    <div className='SHRC-dash'></div>
                    <div className='SHRC-title'>Talent Unleashed, Businesses Transformed</div>
                    <div className='SHRC-desc'>Strategic HR RPO elevating businesses with tailored talent acquisition, ensuring excellence in workforce dynamics</div>
                    <Link to = "/Solutions/business-consulting">
                        <div className='SHRC-read'>
                            <div>Read more</div>
                            <div>
                                <img src={Arrow} className='shrc-arrow' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='Scar-bottom'>
                Revolutionized talent acquisition for clients with a streamlined RPO model, achieving 30% faster hiring cycles and exceptional candidate satisfaction.
            </div>
        </div>




        
     <div className='S-innovate'>
            <div className='inno-top'>
                <div className='SHRC-left'>
                    <div className='SHRC-dash'></div>
                    <div className='Scar-title '>Innovate, Strategize, Excel Together</div>
                    <div className='Scar-desc'>Strategic business consulting for transformative solutions, reshaping industries and driving sustained success collaboratively</div>
                    <div className='SHRC-read'>
                        <div>Read more</div>
                        <div>
                            <img src={Arrow} className='shrc-arrow' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='inno-center'>
                <div className='inno-c-left'>
                <img src={Inno} className='inno-c-left' />
                </div>
                <div className='inno-c-rigth'>
                <div className='inno-right'>
                    <div className='inno-box'><p className='SRHC-box-text'>Strategic Success, Shaping Futures with Innovative Excellence.</p></div>
                    <div className='inno-box'><p className='SRHC-box-text'>Chart Success Optimization – Your Growth, Our Expertise</p></div>
                </div>
                </div>
            </div>
            <div className='inno-bottom'>Guided client enterprises through strategic transformations, optimizing operations and achieving sustainable growth, a hallmark of our dynamic business consulting services.</div>
        </div> 
    </div>
  )
}

export default SHRC