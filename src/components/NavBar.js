import React from 'react'
import logo from '../img/logo.png'
import '../App.css'
import map from '../img/map.JPG'
import call from '../img/Call.svg';
import mail from '../img/Mail.svg';


const NavBar = () => {
  return (
    <div>
      <div className='navcontact'>
        <div className='navcontactcall'><img src={call} alt=''/><h1>8500678444</h1></div>
        <div className='navcontactmail' ><img src={mail} alt=''/> <h1>shrisai1357@gmail.com</h1></div> 
      </div>
      <div className='navbarcontainer'>
          <div className='logocontainer'>
          <img src={logo} alt=''/>
          </div>
          <div className='contactcontainer'>
            <h1>Contact</h1>
            <span>Shri Sai Electric<br/>
            4-427/4, Opp Bharat Petrol Pump<br/>
            Meerpet Hyderabad 8500678444 <br/>
            shrisai1357@gmail.com</span>
          </div>
          <div className='mapcontainer' style={{width:'20rem',paddingTop:'2%'}}>
            <a href='https://www.google.com/maps/place/SHRISAI+MEE+SEVA/@17.3265764,78.5251081,17.99z/data=!4m13!1m7!3m6!1s0x3bcba26ef7cad305:0x477dae0945f5af91!2sMeerpet,+Telangana!3b1!8m2!3d17.3227982!4d78.5280016!3m4!1s0x3bcba3a173ed73d3:0x2e28cacc01a1bc61!8m2!3d17.3268684!4d78.5264046'>
              <img src={map} alt='' style={{width:'100%'}}/>
            </a>
          </div>
      </div>
      <div className='credits'> Designed and Developed by SaiChaitanya Muthyala & Bharath KBPR </div>
    </div>
  )
}

export default NavBar