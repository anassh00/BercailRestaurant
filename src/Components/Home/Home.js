import React from 'react'
import "./Home.css"
import image from '../../Assets/image20.png'
import bckgrndImage from '../../Assets/bckgrndImage.png'

const Home = () => {
  return (
    <div>
      <img className='logoBercail' src={image}></img>
    <div className='homePage'>
      <img style={{width: "100%"}} src={bckgrndImage}></img>
    </div>
    </div>
  )
}

export default Home