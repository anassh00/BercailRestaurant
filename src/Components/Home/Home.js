import React from 'react'
import "./Home.css"
import image from '../../Assets/image20.png'

const Home = () => {
  return (
    <div>
      <img className='logoBercail' src={image}></img>
    <div className='homePage'>
      <img style={{width: "100%"}} src="http://anassh00.github.io/BercailRestaurant/2ea5f954-3cce-41dc-908a-c4241b40b7622.png"></img>
    </div>
    </div>
  )
}

export default Home