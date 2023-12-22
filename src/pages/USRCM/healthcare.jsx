import React from 'react'
import './healthcare.css'
import Hcproblems from './Assets/Problem solving-pana 1.png'
import Hcrate from './Assets/Conversion rate optimization.png'
import Revenue from './Assets/Revenue.png'
import Hcspecialities from './Assets/specialities.png'
import Hctrialt from './Assets/Group 38.png'
import Hctrial from './Assets/Nav-button.png'
import Hctrialb from './Assets/Group 39.png'
import HcEligibility from './Assets/Eligibility.png'
import Hccharge from './Assets/charge.png'
import Hcrev from './Assets/rev.png'
import HcMedical from './Assets/medical.png'
import HcDenial from './Assets/denial.png'
import Hcend from './Assets/end.png'
import Hcaccount from './Assets/account.png'
import Hcclaim from './Assets/claim.png'
import Hcpatient from './Assets/patient.png'
import Hcprior from './Assets/prior.png'
import Hcflex11 from './Assets/image 864.png'
import Hcflex12 from './Assets/image 866.png'
import Hcflex13 from './Assets/image 867.png'
import Hcflex21 from './Assets/image 865.jpg'
import Hcflex22 from './Assets/image 868.png'
import Hcflex31 from './Assets/Rectangle 106.png'
import Hcflex32 from './Assets/image 871.png'
import Hcflex33 from './Assets/image 870.png'
import Hcflex34 from './Assets/image 869.png'

const Health = () => {
  return (
    <div>
        <div className='Hc-maincon'>
            {/*Problems faced in U.S Healthcare*/}

            <div className='Hc-fi-con'>
                <div className='Hc-fi-main-flex'>
                    <div className='Hc-fi-header'>
                        <div className='Hc-fi-head'>Problems faced in U.S Healthcare</div>
                        <div className='Hc-fi-para'>Time complexity, administrative burdens, financial losses, inefficiency billing processes, cash flow issues, difficulty in coding guidelines and keeping up with changing regulations.</div>
                    </div>
                    <div className='Hc-fi-img'>
                        <img className='Hcproblems' src={Hcproblems}/>
                    </div>
                </div>
            </div>

            {/*Our solutions approach*/}
            <div className='Hc-se-con'>
                
                    <div className='Hc-se-main-head'>
                        <div className='Hc-se-mi-dash'></div>
                        <div className='Hc-se-head'>
                            <div className='Hc-se-h3'>Our solutions approach</div>
                            <div className='Hc-se-h31'>for Employment drought</div>
                        </div>
                    </div>
                <div className='Hc-se-main-flex--c'>
                    <div className='Hc-se-main-flex'>
                        <div className='Hc-se-flex-11'>End-to-End medical billing services</div>
                        <div className='Hc-se-flex-12'>Customized solutions for each client's needs</div>
                    </div>
                    <div className='Hc-se-main-flex-mid'>
                        <div className='Hc-se-flex-21'>Advanced technology and industry best practices</div>
                        <div className='Hc-se-flex-22'>Proactive approach to optimise revenue cycles and minimise denials</div>
                    </div>   
                    <div className='Hc-se-main-flex-last'>
                        <div className='Hc-se-flex-31'>Highly skilled billing experts and revenue cycle specialists</div>
                    </div>
                </div>  
            </div>

            {/*Our Services*/}

            <div className='Hc-th-con'>
                <div className='Hc-th-left'>
                    <div className='Hc-th-dash'></div>
                    <div className='Hc-th-head'>Our Services</div>
                    <div className='Hc-th-left-list'>
                        <div className='Hc-th-sub-1'>
                            <div className='Hc-th-flex-11'>
                                <div className='HcEligibility'><img className='HcEligibility-1' src={HcEligibility}/></div>
                                <div className='Hc-th-para'>Eligibility and benefits verification</div>
                            </div>
                            <div className='Hc-th-flex-12'>
                                <div className='Hccharge'><img className='Hccharge-1' src={Hccharge}/></div>
                                <div className='Hc-th-para'>Charge entry</div>
                            </div>
                        </div> 
                        <div className='Hc-th-sub-2'>
                            <div className='Hc-th-flex-11'>
                                <div className='Hcrev'><img className='Hcimg' src={Hcrev}/></div>
                                <div className='Hc-th-para'>Revenue cycle Analytics</div>
                            </div>
                            <div className='Hc-th-flex-12'>
                                <div className='Hcmedical'><img className='Hcimg' src={HcMedical}/></div>
                                <div className='Hc-th-para'>Medical coding</div>
                            </div>
                        </div>
                        <div className='Hc-th-flex-mid'>
                            <div className='Hcdenial'><img className='Hcimg' src={HcDenial}/></div>
                            <div className='Hc-th-para'>Denial & Coding Denial management services</div>
                        </div>
                        <div className='Hc-th-flex-mid'>
                            <div className='Hcend'><img className='Hcimg' src={Hcend}/></div>
                            <div className='Hc-th-para'>End to end revenue cycle management</div>
                        </div>
                        <div className='Hc-th-sub-2'>
                            <div className='Hc-th-flex-11'>
                                <div className='Hcaccount'><img className='Hcimg' src={Hcaccount}/></div>
                                <div className='Hc-th-para'>Account Receivable Management</div>
                            </div>
                            <div className='Hc-th-flex-12'>
                                <div className='Hcclaim'><img className='Hcimg' src={Hcclaim}/></div>
                                <div className='Hc-th-para'>Claim submission</div>
                            </div>
                        </div>
                        <div className='Hc-th-sub-2'>
                            <div className='Hc-th-flex-11'>
                                <div className='Hcpatient'><img className='Hcimg' src={Hcpatient}/></div>
                                <div className='Hc-th-para'>Patient demographic entry</div>
                            </div>
                            <div className='Hc-th-flex-12'>
                                <div className='Hcprior'><img className='Hcimg' src={Hcprior}/></div>
                                <div className='Hc-th-para'>Prior Authorization services</div>
                            </div>
                        </div>

                    
                    
                    
                    </div>

                </div>
                <div className='Hc-th-right'>
                    <div>
                        <div className='Hcrate'><img className='Hcrate1' src={Hcrate}/></div>
                        <div className='Hc-th-ri-para'>
                            <div className='Hc-th-right-para-1'> Optimize U.S. healthcare: </div>
                            <div className='Hc-th-right-para-2'>streamline revenue cycles for efficiency and profitability</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Our USP*/}

            <div className='Hc-fo-con'>
                <div className='Hc-se-main-head'>
                    <div className='Hc-se-mi-dash'></div>
                    <div className='Hc-fo-head'>
                        <div className='Hc-fo-h3'>Our USP</div>
                        <div className='Hc-fo-h31'>in HIPAA compliance</div>
                    </div>
                </div>
                <div className='Hc-fo-para'>Our unique selling proposition (USP) is providing comprehensive revenue cycle management services with a focus on recovering old Accounts Receivable (AR) through our distinctive 3-touch AR follow-up approach, ensuring maximum revenue recovery for healthcare providers</div>
            </div>


            {/*Outline of what we do*/}

            <div className='Hc-fiv-con'>
                <div className='Hc-fiv-left'>
                    <div className=''><img  className='Hcrevenue' src={Revenue} /></div>
                </div>
                <div className='Hc-fi-right'>
                    <div className='Hc-right-para-1'>Outline of what we do</div>
                    <div className='Hc-right-para-2'>Comprehensive Revenue Cycle Management</div>
                    <div className='Hc-right-para-2'>Personalized and Dedicated Service</div>
                    <div className='Hc-right-para-2'>Industry Expertise and Compliance</div>
                    <div className='Hc-right-para-2'>Revenue Recovery (3 Touch AR Fup)</div>
                </div>
            </div>


            {/*RCM Specialisation*/}

            <div className='Hc-si-con'>
                <div className='Hc-si-main-flex'>  
                    <div className='Hc-si-left'>
                        <div className='Hc-th-dash'></div>
                        <div className='Hc-si-head'>RCM Specialisation</div>
                    </div>
                    <div className='Hc-si-para'>
                        <div className='Hc-si-left-para'>Optimising <div>revenue</div></div>
                        <div className='Hc-si-mid-para'>Improving Financial <div>Performance</div></div>
                        <div className='Hc-si-right-para'>Streamlining <div>process</div></div>
                    </div>
                </div> 
            </div>

            {/*specialities we handle in healthcare */}
           

        
            <div className='Hc-sev-con'>
            
                <div className='Hc-sev-header'>
                    <div className='Hc-th-dash'></div>
                    <div className='Hc-sev-head'>Specialities we handle in healthcare</div> 
                </div>
                <div className='Hc-sev-para-flex'>
                    <div className='Hc-sev-flex-1'>
                        <div className='Hc-sev-flex-11'>
                            <div ><img className='Hc-sev-img' src={Hcflex11}/></div>
                            <div className='Hc-sev-flex-head'>Surgical Specialties</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Ambulatory Surgery</li>
                                    <li>General Surgery</li>
                                    <li>Neurosurgery</li>
                                    <li>Orthopedics</li>
                                </ul>
                            </div>

                        </div>
                        <div className='Hc-sev-flex-11'>
                        <div ><img className='Hc-sev-img' src={Hcflex12}/></div>
                            <div className='Hc-sev-flex-head'>Dental and Oral Health</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Dental</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Hc-sev-flex-11'>
                        <div className='Hc-sev-img-1' ><img className='Hc-sev-img' src={Hcflex13}/></div>
                            <div className='Hc-sev-flex-head'>Multidisciplinary</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Multi-Specialty (may involve various medical fields)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='Hc-sev-flex-2'>
                        <div className='Hc-sev-flex-11'>
                        <div><img className='Hc-sev-img' src={Hcflex21}/></div>
                            <div className='Hc-sev-flex-head'>Medical Specialties</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Anaesthesiology</li>
                                    <li>Cardiology</li>
                                    <li>Dermatology & Cosmetic </li>
                                    <li>Surgery</li>
                                    <li>Gastroenterology</li>
                                    <li>Internal Medicine</li>
                                    <li>Neurology</li>
                                    <li>Obstetrics</li>
                                    <li>Oncology</li>
                                    <li>Ophthalmology</li>
                                    <li>Urology</li>
                                </ul >
                            </div>
                        </div>
                        <div className='Hc-sev-flex-11'>
                        <div className=''><img className='Hc-sev-img' src={Hcflex22}/></div>
                            <div className='Hc-sev-flex-head'>Diagnostic and Imaging Specialties</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Audiology</li>
                                    <li>Pathology</li>
                                    <li>Radiology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='Hc-sev-flex-3'>
                        <div className='Hc-sev-flex-11'>
                        <div className=''><img className='Hc-sev-img' src={Hcflex31}/></div>
                            <div className='Hc-sev-flex-head'>Mental Health</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Mental Health</li>
                                    <li>Psychiatry</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Hc-sev-flex-11'>
                        <div className=''><img className='Hc-sev-img' src={Hcflex32}/></div>
                            <div className='Hc-sev-flex-head'>Pediatrics</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Pediatrics</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Hc-sev-flex-11'>
                        <div className=''><img className='Hc-sev-img' src={Hcflex33}/></div>
                            <div className='Hc-sev-flex-head'>Rehabilitation and Therapy</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Physical Therapy</li>
                                </ul>
                            </div>
                        </div>
                        <div className='Hc-sev-flex-11'>
                        <div className=''><img className='Hc-sev-img' src={Hcflex34}/></div>
                            <div className='Hc-sev-flex-head'>Vascular Health</div>
                            <div>
                                <ul className='Hc-sev-list'>
                                    <li>Vascular</li>
                                </ul>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
       
        
        

            {/* 7 day Free Trial */}

        <div className='Hc-ei-con'>
            <div className='Hc-ei-flex-con'>
                <div className='Hc-ei-left'>
                    <div className='Hc-ei-head'>What we deliver</div>
                    <ul className='Hc-ei-list'>
                        <li>3 Step Resolution</li>
                        <li>Cost Effective</li>
                        <li>Proven Expertise</li>
                        <li>Streamlined Operations</li>
                    </ul>
                </div>
                <div className='Hc-ei-right'>
                    <div className='Hc-ei-top'>
                        <div className='Hc-ei-da-11'></div>
                        <div className='Hc-ei-da-12'></div>
                        <div className='Hc-ei-da-13'></div>
                    </div>
                    <div className='Hc-ei-trial'>7 day Free Trial</div>
                    <div className='Hc-ei-bottom'>
                        <div className='Hc-ei-da-21'></div>
                        <div className='Hc-ei-da-22'></div>
                        <div className='Hc-ei-da-23'></div>
                    </div>
                </div>
            </div>
        </div>






        </div>
    </div>
  )
}


export default Health
