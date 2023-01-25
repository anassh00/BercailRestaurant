import React from 'react';
import "./Restaurant.css";
import image from '../../Assets/image20.png';
import bckgrndImage from '../../Assets/bckgrndImage.png'

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
          <div style={{display : 'flex'}}>
            <div style = {{marginRight : "90px"}}>
              image here
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor.
            </div>
          </div>
        </div>     
      </div>
      </div>
    </div>
  )
}

export default Restaurant