import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <div>
        <div className='navbarContainer'>
          <div className='navbarContent'>
          <div onClick={() => routeChange('/')} style={{cursor: 'pointer', fontWeight : 'bold', color : 'white', paddingRight : '23rem'}}>Au Bercail</div>
          <div onClick={() => routeChange('/')} style={{cursor: 'pointer', marginRight : '72px'}}>Home</div>
          <div onClick={() => routeChange('/Restaurant')} style={{cursor: 'pointer', marginRight : '72px'}}>Le Restaurant</div>
          <div onClick={() => routeChange('/Carte')} style={{cursor: 'pointer', marginRight : '72px'}}>La carte</div>
          <div onClick={() => routeChange('/Reserver')} style={{cursor: 'pointer', marginRight : '72px'}}>Reserver</div>
          <div onClick={() => routeChange('/Contact')} style={{cursor: 'pointer'}}>Contact</div>
          </div>
        </div>
    </div>
  )
}

export default NavBar