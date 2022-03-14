import React from 'react'
import banner from '../img/red_banner.jpg';
import NavBar from './NavBar';
import img from '../img/red-bike.png';

const RushInfo = () => {
    var width = window.innerWidth;
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
            <h1>RUSH</h1>
            <p>RUSH available with led Acid and Lithium battery.
             Available in four colors: Red, Blue, White and Grey</p>
             <h3>Available Colors</h3>
             <span className='colors_section_red'></span>
             <span className='colors_section_blue'></span>
             <span className='colors_section_white'></span>
             <span className='colors_section_grey'></span>
            <h3>Price</h3>
            <h1 className='price' >₹85000/-</h1><br/>
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
    <td>RUSH</td>
    <td> 60v</td>
   
  </tr>
  <tr>
    <td>Motor</td>
    <td>250w</td>
    
  </tr>
  <tr>
    <td>Battery</td>
    <td>60V-24AH</td>
    
  </tr>
  <tr>
    <td>Speed</td>
    <td>25KM/H</td>
    
  </tr>
  <tr>
    <td>Range</td>
    <td>80KM</td>
    
  </tr>
  <tr>
    <td>Headlight</td>
    <td>Led</td>
    
  </tr>
  <tr>
    <td> Wheel</td>
    <td>Alloy wheel</td>
    
  </tr>
  <tr>
    <td> Front Brake</td>
    <td>Drum Brake</td>
    
  </tr>
  <tr>
    <td> Tyre</td>
    <td>3.00-10 Tubeless</td>
    
  </tr>
  </table>
       </div>
       <NavBar/>
    </div>
  )
}

export default RushInfo