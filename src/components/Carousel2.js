import React from 'react'
import img from '../img/cutecarousel.jpg'

const Carousel2 = () => {
  return (
    <div className='carousel2container'>
        <div className='carousel2iamge'>
            <img src={img} alt=''/>
            <div className='carousel2title' >
              Cute
              <div className='carousel2price' style={{fontSize:'2.5rem' , borderLeft:'1px solid white',marginLeft:'1.5rem',paddingLeft:'1.5rem'}}><span  style={{fontSize:'1.5rem', color:'#fff'}}>Price</span><p  style={{fontWeight:'900'}}>₹75000</p></div>
              </div>
            <div className='carousel2info' >
              <div className='carouselspeed'>
                25<p>KMPH</p><br/>
                
              </div> 
            </div>
        </div>

    </div>
  )
}

export default Carousel2