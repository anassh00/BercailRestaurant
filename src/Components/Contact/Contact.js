import React from 'react'
import "./Contact.css"

import bckgrndImage from '../../Assets/bckgrndImage.png'

const Contact = () => {
  return (
    <div className='contactPage'>
 
    <div className='HomePageImg'>  <img style={{ width: "100%",height: "100%"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
     <div className='opening'>
          <div> 
          <p>  <a href="tel:123-456-7890"> 04 87 37 02 87</a>   </p>
          <p>  14 Quai Antoine Riboud, 69002 Lyon, France </p>
          </div>
          <div>  
          <p> Lundi - Samedi </p>
          <p>  Dimanche </p>
          </div>
          <div>  
          <p> 12h-23h</p>
          <p>12h-22h</p>
          </div>
        
     </div>
           </div>   
           <div className='formContact'>

            <strong>   Formulaire de Contact : </strong>
            <input style={{border: " 1px solid green", marginBottom:"20px" ,paddingBottom:"10px",width:'60%'}}type={"text"} /> 
            <input style={{border: " 1px solid green", marginBottom:"20px" ,paddingBottom:"10px",width:'60%'}}type={"text"} />
            <input style={{border: " 1px solid green", marginBottom:"20px" ,paddingBottom:"10px",width:'60%'}}type={"text"} />
            <textarea style={{outline:"none",width:'60%'}}cols="5" rows="10"></textarea>
            <button className='reservationBtn2' style={{marginTop:"10px"}}> Envoyer</button>

           </div>

    </div>
  )
}

export default Contact