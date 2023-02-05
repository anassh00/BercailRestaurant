import React from 'react'
import "./Reserver.css"

import bckgrndImage from '../../Assets/bckgrndImage.png'

const Reserver = () => {

  return (
    <div >
    
            
              <div className='homePage'>
           
              <h1 className='title'> Faire une réservation </h1>

               <div>   <img style={{height : "100%" ,width:"100%"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                </div>
                
              </div>

              <div className='reservationSection'>
                <p> Pour les réservations de plus de 8 personnes, merci de nous contacter  <br/> directement par téléphone au 04 87 37 02 87</p>
              
                <div className='reservationForm'>
                    <input type="text" value={"Date"} />
                    <input type="text" value={"Heure"} />  
                    <input type="text" value={"Nombre de personnes"} />
                    <button className='reservationBtn2'> Réserver </button>

            </div>
        </div>
       
    </div>
  )
}

export default Reserver