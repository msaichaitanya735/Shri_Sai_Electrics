import React from 'react'
import banner from '../img/cute_banner.jpg'
import img from '../img/blue-bike.png'
const Info = () => {
  return (
    <div>
       <div className='hero_banner'>
        <img src={banner} alt="" />
       </div>
       <div className='bike_details_section'>
          <div className='bike_hero_img'>
            <img src={img} alt="" />
          </div>
          <div className='bike_details_section_intro'>
            <h1>CUTE</h1>
            <p>CUTE available with led Acid and Lithium battery.
             Available in four colors: Red, Blue, White and Grey</p>
             <h3>Available Colors</h3>
             <span className='colors_section_red'></span>
             <span className='colors_section_blue'></span>
             <span className='colors_section_white'></span>
             <span className='colors_section_grey'></span>
          </div>
       </div>
       <div>
          <h1>SPECIFICATIONS</h1>
         
       </div>
    </div>
  )
}

export default Info