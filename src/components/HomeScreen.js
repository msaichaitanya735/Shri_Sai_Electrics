import React from 'react'
import img from '../img/black.png'

const HomeScreen = () => {
  return (
    <div className='home_bg'>
    <div className="logo">
      <p>SHRI SAI</p>
      <h4>ELECTRIC BIKES</h4>
      <h6>THE FUTURE WORLD</h6>
    </div>
       <div className="home_container">
         <div className='home_bike_itro'>
              <h3>ROAD RANGE 2022</h3>
              <h1>HERO ELECTRIC</h1>
             <div className='cost_dis'>
             <span className='cost_strike'>$2295</span><span className='cost_bike'>$1195.00</span>
             </div>
              <p>High modules efficiency
              and stiffness through the use of kammatail tubes.</p>
              <button>EXPLORE PRODUCTS</button>
         </div>
         <div className='home_hero_bike'>
         <img src={img} alt="" />
         </div>
       </div>
    </div>
  )
}

export default HomeScreen