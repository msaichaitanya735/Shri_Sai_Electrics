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
       <div className='specifications'>
          <h1>SPECIFICATIONS</h1>
          <table id="customers">
  <tr>
    <th>DETAILS</th>
    <th>RATE</th>
   
  </tr>
  <tr>
    <td>Cute</td>
    <td>48v / 60v</td>
   
  </tr>
  <tr>
    <td>Motor</td>
    <td>250w</td>
    
  </tr>
  <tr>
    <td>Battery</td>
    <td>48V-24AH</td>
    
  </tr>
  <tr>
    <td>Speed</td>
    <td>25KM/H</td>
    
  </tr>
  <tr>
    <td>Range</td>
    <td>60 / 75KM</td>
    
  </tr>
  <tr>
    <td>Headlight</td>
    <td>Led</td>
    
  </tr>
  <tr>
    <td>Front</td>
    <td>Alloy wheel</td>
    
  </tr>
  </table>
       </div>
    </div>
  )
}

export default Info