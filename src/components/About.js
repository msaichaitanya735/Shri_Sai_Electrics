import React from 'react'
import img from '../img/bikes.jpg'
const About = () => {
  return (
    <div className='bike_about'>
         <div className='qoute'>
         <blockquote>
         Never go to refuel again. 
         Meet Ved Electric Scooters. A way to connect & 
         recharge the battery at the ease of your own home.
         </blockquote>
         </div>
         <div className='about_bikes_intro'>
            <div className='about_bikes'>
              <img src={img} alt="" />
            </div>
            <div >
              <h1 className='about_bike_h1'>Welcome To Ved Motors</h1>
              <p>
              Ved Motors(VM) is one of the earliest pioneers in electric scooters manufacturer in Andhra Pradesh, South India. With over 13 years of experience, From our humble beginning as a small business to one of the largest manufacturer providing quality, eco-friendly electric scooters & dealership opportunities all across the country – we have come a long way! Today, electricity is the preferred choice because of its inherent efficiency that will shape the rural and urban commute. Not only are our scooters zero-emission but they are also road tax & license-free. Ved Motors not only manufactures electric vehicles, we host an in-house supply chain from batteries, service to electric vehicles. Our focus is on providing the people of this country with a more sustainable and economical solution for communication that will benefit everyone.
              </p>
            </div>
         </div>
    </div>
  )
}

export default About