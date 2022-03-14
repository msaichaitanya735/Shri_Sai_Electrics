import React from 'react'
import img from '../img/bikes.jpg'
const About = () => {
  return (
    <div className='bike_about'>
         <div className='qoute'>
         <blockquote>
         Never go to refuel again. 
         Meet Shri Sai Electric Scooters. A way to connect & 
         recharge the battery at the ease of your own home.
         </blockquote>
         </div>
         <div className='about_bikes_intro'>
            <div className='about_bikes'>
              <img src={img} alt="" />
            </div>
            <div >
              <h1 className='about_bike_h1'>Welcome To Shri Sai Electrics</h1>
              <p>
              Shri Sai Electics is one of the earliest pioneers in electric scooters in Telangana, South India. From our humble beginning as a small business, we aim in providing quality, eco-friendly electric scooters & dealership opportunities all across the country – we have come a long way! Today, electricity is the preferred choice because of its inherent efficiency that will shape the rural and urban commute. Not only are our scooters zero-emission but they are also road tax & license-free. Our focus is on providing the people of this country with a more sustainable and economical solution for communication that will benefit everyone.
              </p>
            </div>
         </div>
    </div>
  )
}

export default About