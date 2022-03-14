import React from 'react'
import HomeScreen from './HomeScreen'
import About from './About'
import Fourbikes from './Fourbikes'
import Whychoose from './Whychoose'
import Performance from './Performance'
import NavBar from './NavBar'
import Carousel2 from './Carousel2'
import {Carousel} from '3d-react-carousal';
import carousel1 from '../img/carousel1.svg';
import carousel2 from '../img/carousel2.svg';
import carousel3 from '../img/carousel3.svg';
import mobcarousal from '../img/mob-car1.svg';
import mobcarousal2 from '../img/mob-car2.svg';
import mobcarousal3 from '../img/mob-car3.svg';

const Homepage = () => {
  let slides = width<600?[
    <img  src={carousel1} alt="1" />,
    <img  src={carousel2} alt="2" />  ,
    <img  src={carousel3} alt="3" />  ,
  ]:[<img  src={mobcarousal} alt="1" />,
  <img  src={mobcarousal2} alt="2" />  ,
  <img  src={mobcarousal3} alt="3" />  ,];

  var width = window.innerWidth;
  console.log(width);
  return (
    <div>
    {/* <HomeScreen /> */}
    {/* <Carousel2/> */}
    <div className='carousel' > <Carousel slides={slides} autoplay={true} arrows={false}/></div>   
    <About />
    <Fourbikes />
    <Whychoose />
    <Performance />
    <NavBar/>
    </div>
  )
}

export default Homepage