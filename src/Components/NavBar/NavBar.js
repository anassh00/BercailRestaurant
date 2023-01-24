import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import image from '../../Assets/image20.png'
import facebook from '../../Assets/Frame.png'
import instagram from '../../Assets/Frame(1).png'

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <div>
        <div onClick={() => routeChange('/')} style={{cursor: 'pointer', fontWeight : 'bold', color : 'white'}}><img style={{position : 'absolute', zIndex : 8, width : "60px", height : "60px", paddingTop : "20px", paddingLeft : "40px"}} src={image}></img></div>
        <div className='navbarContainer'>
          <div className='navbarContent'>
          <div onClick={() => routeChange('/')} style={{cursor: 'pointer', paddingLeft : '300px', marginRight : '72px'}}>Home</div>
          <div onClick={() => routeChange('/Restaurant')} style={{cursor: 'pointer', marginRight : '72px'}}>Le Restaurant</div>
          <div onClick={() => routeChange('/Carte')} style={{cursor: 'pointer', marginRight : '72px'}}>La carte</div>
          <div onClick={() => routeChange('/Reserver')} style={{cursor: 'pointer', marginRight : '72px'}}>Reserver</div>
          <div onClick={() => routeChange('/Contact')} style={{cursor: 'pointer', marginRight : '72px'}}>Contact</div>
          <div onClick={() => routeChange('/Contact')} style={{cursor: 'pointer', marginRight : '52px'}}><img style={{position : 'absolute', zIndex : 8, width : "30px", height : "30px"}} src={facebook}></img></div>
          <div onClick={() => routeChange('/Contact')} style={{cursor: 'pointer'}}><img style={{position : 'absolute', zIndex : 8, width : "30px", height : "30px"}} src={instagram}></img></div>
          </div>
        </div>
    </div>
  )
}

export default NavBar