import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
import image from '../../Assets/image20.png'
import instagram from '../../Assets/Frame.png'
import facebook from '../../Assets/Frame(1).png'
import navMob from '../../Assets/menu-btn.png'

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
        <div className='logo' onClick={() => routeChange('/')} style={{cursor: 'pointer', fontWeight : 'bold', color : 'white'}}><img style={{ width : "100px", height : "100px", paddingTop : "40px", paddingLeft : "40px"}} src={image}></img></div>
        
          <div className='navbarContent'>

          <div onClick={() => routeChange('/')}>Home</div>
          <div onClick={() => routeChange('/Restaurant')}>Le Restaurant</div>
          <div onClick={() => routeChange('/Carte')}>La carte</div>
          <div onClick={() => routeChange('/Reserver')}>Reserver</div>
          <div onClick={() => routeChange('/Contact')} >Contact</div>
          <div onClick={() => routeChange('/Contact')} ><img className='logoSocialMedia ' src={facebook}></img></div>
          <div onClick={() => routeChange('/Contact')} ><img className='logoSocialMedia ' src={instagram}></img></div>
        
          </div>
        </div>
    

    </div>
  )
}

export default NavBar 