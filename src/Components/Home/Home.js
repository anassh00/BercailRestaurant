import React from 'react'
import "./Home.css"
import image from '../../Assets/image20.png'
import bckgrndImage from '../../Assets/bckgrndImage.png'
import grandCarrousel from '../../Assets/grandCarrousel.jpg'
import {AuBercail} from '../index'

const Home = () => {
  return (
    <>
    <div>               
          <div className='homePage'>
          <div>  <img className='logoBercail' src={image} alt={"logo"}></img> </div>

           <div>  <img style={{ width: "100%",height: "100%"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
           </div>
          <div className='menu'> 
            <h4> Burgers, grillades et assiettes à  <span> &nbsp; partager  </span>dans un restaurant de style  <br/>
            industriel avec terrasse offrant une vue sur le fleuve au cœur du quartier <br/> de <span> &nbsp; Confluence </span>
            </h4> 
              </div>
              <div className='restaurentCard'>
               
                <address style={{ textAlign: "center" , color: "white"}}>  14 Quai Antoine Riboud, 69002 Lyon </address>
                <img className='cardImage' src={grandCarrousel} alt={"photoable"}></img>
                  <h2> carte du restaurant</h2>
                 <button className='discoverBtn'> Découvrir </button>
             </div>
              <div className='openingTime'> 
           <h1> Nos Horaires <br/> <span style={{fontSize: '38px'}}> d'ouverture </span> 
                </h1>
                <div >
                   <p>Lundi 12h - 23h   </p>
                   <p> Mardi 12h - 23h   </p>
                   <p> Mercredi 12h - 23h </p>     
                   <p> Jeudi 12h - 23h    </p>     
                   <p> Vendredi 12h - 23h </p>     
                   <p> samedi 12h - 23h     </p>     
                   <p>  Dimanche 12h - 22h </p> 
                 </div>  
                 </div>   
                 <div className='reservation'>
                  <button className='reservationBtn'> Réserver</button>
                <p> Ou au  <a href="tel:123-456-7890"> 04 87 37 02 87</a>   </p>
                 </div>
                 <AuBercail/>
                </div>
   </div>
  </> 
  )
}
export default Home