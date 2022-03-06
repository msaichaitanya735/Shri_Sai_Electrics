import React from 'react'
import img1 from '../img/blackscooty.jpg'
const Fourbikes = () => {
  return (
    <div>
        <div className='showcase_bikes'>
      
         <div className='bike_type'>
           <img className='bike_img' src={img1} alt="" />
           <div className='content'>
           <h3>RUSH</h3>
           <button>KNOW MORE</button>

         </div>
         </div>
        
         
         <div className='bike_type'>
           <img src={img1} alt="" />
           <div className='content'>
           <h3>CUTE</h3>
           <a href="/info"><button>KNOW MORE</button></a>

         </div>
         </div>
         <div className='bike_type'>
           <img src={img1} alt="" />
           <div className='content'>
           <h3>NAMO</h3>
           <button>KNOW MORE</button>

         </div>
         </div>
         <div className='bike_type'>
           <img src={img1} alt="" />
           <div className='content'>
           <h3>LIAM</h3>
           <button>KNOW MORE</button>

         </div>
         </div>
        </div>
    </div>
  )
}

export default Fourbikes