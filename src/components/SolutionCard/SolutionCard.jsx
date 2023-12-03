import React from 'react'
import './SolutionCard.css'


const SolutionCard = (props) => {
  const SolutionsCardStyle = {
    backgroundColor: props.bgc
  };

  const SolutionCardpadcol = {
    backgroundColor: props.pc
  };

  const SolutionCardlearncol = {
    color : props.c
  };
  
  return (
    <>
        <div className='Solutions-card' style={SolutionsCardStyle}>
            <div className = "SolutionCard-left">
                <div className='SolutionCard-title-name'  >
                    <span className='SolutionCard-title' style={SolutionCardpadcol}>{props.cont}</span>
                    <br/>
                    <span className = "SolutionCard-title2" style={SolutionCardpadcol}>{props.cont2}</span>
                </div>
                <div className='Solution-card-learn-more'> 
                <div className='Solution-card-arrow'>
                  <img src={props.arrowimg} alt=""/>
                </div>
                <div className='Solution-card-Learn' style = {SolutionCardlearncol} >
                    Learn More
                </div>
                 </div>
            </div>
            <div className='SolutionCard-right'>
              <img src={props.mainimg}  className='SolutionCard-img'/>
            </div>
        </div>
    </>
  )
}

export default SolutionCard