import React from 'react'
import logo from '../img/logo.png'
import '../App.css'
import map from '../img/map.JPG'

const NavBar = () => {
  return (
    <div className='navbarcontainer'>
        <div className='logocontainer'>
        <img src={logo} alt=''/>
        </div>
        <div className='contactcontainer'>
          <h1>Contact</h1>
          <span>Shri Sai Electric<br/>
          4-427/4, Opp Bharat Petrol Pump<br/>
          Meerpet Hyderabad</span>
        </div>
        <div className='mapcontainer' style={{width:'20rem',paddingTop:'2%'}}>
          <a href='https://www.google.com/maps/place/SHRISAI+MEE+SEVA/@17.3265764,78.5251081,17.99z/data=!4m13!1m7!3m6!1s0x3bcba26ef7cad305:0x477dae0945f5af91!2sMeerpet,+Telangana!3b1!8m2!3d17.3227982!4d78.5280016!3m4!1s0x3bcba3a173ed73d3:0x2e28cacc01a1bc61!8m2!3d17.3268684!4d78.5264046'>
            <img src={map} alt='' style={{width:'100%'}}/>
          </a>
        </div>
    </div>
  )
}

export default NavBar