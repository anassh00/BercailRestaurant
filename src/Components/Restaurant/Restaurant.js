import React from 'react';
import "./Restaurant.css";
import {Footer} from '../index';
import image from '../../Assets/image20.png';
import bckgrndImage from '../../Assets/bckgrndImage.png'
import img2 from '../../Assets/50955d9a3ed59650cbcf93ceb4d901381d5f6bee1.png'
import img1 from '../../Assets/f555e625-4e83-43cd-a6e5-1830229067681.png'

const Restaurant = () => {
  return (
    <div className='restauPage'>
      <div className='restauTitle'>
        <h1>Like in your Grandma's Home</h1>
      </div>
      <div>
        <img className='logoBercailRestaurant' src={image}></img>
      </div>
      <div className='imageConatiner' style={{height : "400px"}}>
        <img style={{width: "100%"}} src={bckgrndImage}></img>
      </div>
      <div className='descriptionPageContainer'>
      <div style={{height: "500px", display :'flex'}}>
        <div className='descriptionPage'>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
          </div>
          <h1 style={{marginTop : "50px"}}>Notre philosophie</h1>
          <div style={{display : 'flex', marginTop : "60px"}}>
            <div style = {{marginRight : "90px"}}>
              <img style={{ position : 'absolute', width : "40%"}} src={img1}></img>
              <img style={{ position : 'absolute', width : "25%", left : "30%", transform : "translate(0%, 40%)"}} src={img2}></img>
            </div>
            <div className='secondDescription'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor.
            </div>
          </div>
        </div>     
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Restaurant