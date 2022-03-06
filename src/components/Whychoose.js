import React from 'react'
import img from '../img/blue-bike.png'
const Whychoose = () => {
  return (
    <div>
       <div className='choose_us_section'>
         <div className='choose_title'>
         <h1>WHY CHOOSE US</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          exercitationem repellendus aut. Aliquid facere necessitatibus aspernatur alias 
         sint?</p>
         </div>
         <div className='choose_features'>
             <div className='choose_features_points'>
             <div className='choose_box'>
                    <p>NO LICENCE</p>
                  </div>
             <div className='choose_box'>
                    <p>NO REGISTRATION</p>
                  </div>
                  <div className='choose_box'>
                    <p>NO POLLUTION</p>
                  </div>
                  <div className='choose_box'>
                    <p>NO PETROL</p>
                  </div>
                {/* <div className='choose_box'>
                    <p>MOTOR 250W</p>
                  </div>
                  <div className='choose_box'>
                    <p>BATTERY:48/60V24AH</p>
                  </div>
                  <div className='choose_box'>
                    <p>MAX SPEED:25KM/H</p>
                  </div>
                  <div className='choose_box'>
                    <p>RANGE:60KMS</p>
                  </div>
                  <div className='choose_box'>
                    <p>FRONT BRAKE:DRUM BRAKE</p>
                  </div>
                  <div className='choose_box'>
                    <p>REAR BRAKE:DRUM BRAKE</p>
                  </div>
                  <div className='choose_box'>
                    <p>TYER:3.00-10 TUBELESS TYRE</p>
                  </div>
                  <div className='choose_box'>
                    <p>WITH USB PHONE CHARGING</p>
                  </div>
                  <div className='choose_box'>
                    <p>REAPAIR BUTTON</p>
                  </div>
                  <div className='choose_box'>
                    <p>REVERSE OPTION</p>
                  </div>
                  <div className='choose_box'>
                    <p>REMOTE LOCKING</p>
                  </div>
                  */ } 
             </div>

             <div className='choosefeature_bike_pic'>
              <img src={img} alt="" />
             </div>
         </div>
       </div>
    </div>
  )
}

export default Whychoose