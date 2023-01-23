import React from 'react';
import "./Restaurant.css";

const Restaurant = () => {
  return (
    <div className='restauPage'>
      <div className='restauTitle'>
        Like in your Grandma's Home
      </div>
      <div className='imageConatiner' style={{height : "400px"}}>
        <img style={{width: "100%"}} src="http://anassh00.github.io/BercailRestaurant/2ea5f954-3cce-41dc-908a-c4241b40b7622.png"></img>
      </div>
      <div className='descriptionPageContainer'>
      <div style={{height: "500px", display :'flex'}}>
        <div className='descriptionPage'>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
          </div>
          <h1 style={{marginTop : "50px"}}>Notre philosophie</h1>
        </div>     
      </div>
      </div>
    </div>
  )
}

export default Restaurant