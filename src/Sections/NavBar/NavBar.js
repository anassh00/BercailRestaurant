import React, { useState } from 'react'
import {useRef} from "react"
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import image from '../../Assets/image20.png'
import instagram from '../../Assets/Frame.png'
import facebook from '../../Assets/Frame(1).png'
import { FaBars,FaTimes } from 'react-icons/fa';

const NavBar = (args) => {

const navRef = useRef()
const showNavbar =() => {
  navRef.current.classList.toggle("responsive_nav")
}

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
    navRef.current.classList.remove("responsive_nav");
   
  }

  return (
    <div>

        <div className='navbarContainer' >

          <div id='navbarContent' className='navbarContent' ref={navRef}>

          <div onClick={() => routeChange('/')}>Home</div>
          <div onClick={() => routeChange('/Restaurant')}>Le Restaurant</div>
          <div onClick={() => routeChange('/Carte')}>La carte</div>
          <div onClick={() => routeChange('/Reserver')}>Reserver</div>
          <div onClick={() => routeChange('/Contact')} >Contact</div>
            <button onClick={showNavbar} className='nav-btn close-btn'>  <FaTimes  /> </button>
          <div onClick={()=> window.open("https://www.facebook.com/Au-Bercail-Bar-%C3%A0-Bi%C3%A8res-Lyon-100213935878702")} ><img className='logoSocialMedia ' src={facebook}></img></div>
          <div onClick={()=> window.open("https://www.instagram.com/aubercaillyon/")} ><img className='logoSocialMedia ' src={instagram}></img></div>
          <div className='logo' onClick={() => routeChange('/')} style={{cursor: 'pointer', fontWeight : 'bold', color : 'white'}}><img style={{ width : "100px", height : "100px", paddingTop : "40px", paddingLeft : "40px"}} src={image}></img></div>

          </div>

          <button onClick={showNavbar} className='nav-btn'> 
          <FaBars  />
           </button>

        </div>
    

    </div>
  )
}

export default NavBar 