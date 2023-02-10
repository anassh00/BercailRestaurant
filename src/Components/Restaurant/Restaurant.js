import React from 'react';
import "./Restaurant.css";
import {Footer} from '../index';
import image from '../../Assets/image20.png';
import logoB from '../../Assets/logoB.png';
import confluence from "../../Assets/confluence.png"
import bckgrndImage from '../../Assets/bckgrndImageBis3.png'
import philo from '../../Assets/philo.png'
import img1 from '../../Assets/f555e625-4e83-43cd-a6e5-1830229067681.png'
import { padding } from '@mui/system';

const Restaurant = () => {
  return (


    <>  
    <div className='restraurentContainer'>
    <div className='HomePageImg'>  <img style={{ width: "100%",height: "100%"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
    </div>
      <div className='intro'>
           <div className="titrePage" >  Le Restaurant 
           </div>
      <div className='grandma'>  
            <div className='likeGrandma'> Like In your Grandma’s Home 
             </div>
         <div className='grandmaAddress'>  
            <div>   Au Bercail</div>
            <div>  14 Quai Antoine Riboud 69002 <br/> Lyon, France</div> 
        </div> 
      </div>
    </div>

   <div className='histoire'>  
   <div className='hist1'>
        <div style={{fontFamily:"'Shorelines Script Bold', sans-serif",padding:"20px 0"}} >  notre histoire</div>
        <div>  Comme chez grand-mère”, voila notre ligne de conduite depuis l’ouverture du Bercail en 2018. Une cuisine généreuse, gourmande au gout de nostalgie à partager en famille ou entre amis !
                Né de trois amis, <br/> ce lieu atypique et accueillant à été conçu sur les Berges de la Saône à Lyon. <br/>
              Le Bercail est le lieu idéal des retrouvailles enflammées autour d’un bon plat à partager. 
       </div>
       </div>  
          <div style={{ textAlign:"center" ,padding:"20px 0"}}>  <img src={logoB}></img>  </div>
          
      </div> 
          <div className='Philo'>
            <div  className='Philo1'>
              <div style={{fontFamily:"'Shorelines Script Bold', sans-serif",padding:"20px 0"}}>notre philosophie</div>
                <div>Ce lieu à été conçu en respect de l’environnement en plusieurs points :<br/>
                Nous avons récupérés de nombreux éléments de décoration dans des antiquaires, des brocantes, aux puces ou encore sur le bon coin pour pouvoir offrir de belles nouvelles vies à ces objets. En venant au Bercail, vous pourrez apercevoir au dessus de vous, une partie de nos trésors !<br/>
                Tous nos meubles sont uniques, comme vous ! <br/>
                La cuisine y est généreuse et principalement basée sur les producteurs du coins pour les fruits, les légumes et les viandes. <br/>
                Enfin, nous préconisons le fait-maison afin de vous proposer une expérience gustative “comme à la maison” ! <br/>
                A bientôt
                 </div>
                </div>

                <div className='Philo2'>  
                   <img style={{ textAlign:"center", padding:"20px 0",}} src={philo}></img>
                    <div>
                      <img className='logoSecondary' style={{ textAlign:"center", padding:"20px 0", width:"250px"}} src={confluence}></img>
                </div>
              </div>
    
    
    
    </div>
</div>
     </>
  )
}

export default Restaurant