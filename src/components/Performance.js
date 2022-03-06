import React from 'react'
import img from '../img/red_poster1.png'

const Performance = () => {
  return (
    <div className='performance'>
        <div className='performance_title'>
           <h1>Best EV Performance</h1>
        </div>
        <div className='performance_details'>
        <div className='performance_details_image'>
         <img src={img} alt="" />
        </div>
        <div className='performance_details_specs'>
          <h1>Powered with Best</h1>
          <ul>
          <li>Eco-Friendly</li>
           <li>Cost Innovation</li>
           <li>Good charging Point</li>
           <li>Customer Experience</li>
          </ul>
          
        </div>
        </div>
    </div>
  )
}

export default Performance