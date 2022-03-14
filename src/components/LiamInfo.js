import React from 'react'

import banner from '../img/blackbanner.jpg';
import img from '../img/liam.png'
import NavBar from './NavBar';

const LiamInfo = () => {
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
            <h1>LIAM</h1>
            <p>Liam available with led Acid and Lithium battery.
             Available in four colors: Red, Blue, White and Grey</p>
             <h3>Available Colors</h3>
             <span className='colors_section_red'></span>
             <span className='colors_section_blue'></span>
             <span className='colors_section_white'></span>
             <span className='colors_section_grey'></span>
             <h3>Price</h3>
            <h1 className='price' >₹90000/-</h1><br/>
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
    <td>Battery</td>
    <td> 60/72v 26/30Amp  Lithium</td>
   
  </tr>
  <tr>
    <td>Motor</td>
    <td>QS motor top inclass</td>
    
  </tr>
  {/* <tr>
    <td>Battery</td>
    <td>60V-24AH</td>
    
  </tr> */}
  <tr>
    <td>Speed</td>
    <td>25KM/H</td>
    
  </tr>
  <tr>
    <td>Range</td>
    <td>80KM-130KM</td>
    
  </tr>
  <tr>
    <td>Headlight</td>
    <td>Head/Tail LED</td>
    
  </tr>
  <tr>
    <td> Wheel</td>
    <td>Alloy wheel</td>
    
  </tr>
  <tr>
    <td> Brake</td>
    <td>Front /Disc Rear Drum</td>
    
  </tr>
  <tr>
    <td> Tyre</td>
    <td>90/90-10 Tubeless</td>
    
  </tr>
  </table>
       </div>
       <NavBar/>
    </div>
  )
}

export default LiamInfo