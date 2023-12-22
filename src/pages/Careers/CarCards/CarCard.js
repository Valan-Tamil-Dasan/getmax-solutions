import React from 'react'
import './CarCard.css'


const CarCard = (props) => {
  return (
    <div className='car-card-cont'>
        <div className='car-card-top'>
            <div className='car-card-img'>
                <img src={props.img} className='car-card-img'/>
            </div>
            <div>
              <div className='car-card-title'>
                 {props.job}
              </div>
              <div className='car-card-comp'>
                {props.comp}
              </div>
            </div>
        </div>
        <div className='car-card-desc'>
          {props.desc}
        </div>
        <div className='car-card-line'></div>
        <div className='car-card-bottom'>
            <div className='car-card-apply'><div className='car-card-apply-text'>Apply</div></div>
            <div className='car-card-price'>{props.price}</div>
        </div>
    </div>
  )
}

export default CarCard