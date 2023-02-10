import './Carte.css'
import PizzaC from '../../Assets/PizzaCouverte.png'
import  Burger from '../../Assets/Burger.png'
import PizzaV from '../../Assets/PizzaV.png'
import Planche from '../../Assets/planche.png'
import Fromage from '../../Assets/fromage.png'
import bckgrndImage from '../../Assets/bckgrndImageBis3.png'
import Table from '../../Assets/Table.png'



const Carte = () => {
  return (
    <div className='cartePage'>
                   <div className='CImg'>  <img  className="salesPic" style={{ width: "100%",height: "100%"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                  <div className='carteBtns'>  
                    <button className='carteBtn'>  Drink Good ! </button>
                    <button className='carteBtn'>  Eat Good !  </button>
                    </div>
                   </div>
                   <div className='BestSelers'>

                   <div className='sales'>  
                   <img  className="salesPic" src={PizzaC} alt={"photoHomePage"}></img> 
                   <div className='vide'>  <span> Burger Le mexicain <br/> <br/> </span>
                   Cheddar, Poulet Pané épicé, <br/> Guacamole, Salades, Chou rouge, <br/> Tomates, Frites Maison 
                   </div>

                   </div>
                   <div className='sales'>  
                   <img  className="salesPic" src={Planche} alt={"photoHomePage"}></img> 

                   <div className='vide'>  <span className='titreRecette'>  Planche finger food <br/><br/></span>
                      Oignons Rings, Mozza Sticks au lard, <br/> Cheezy Croquette, Olives de  <br/>Provence, Chicken Tenders, Potatoes</div>
                 
                   </div>
                   <div className='sales'>  
                   <img  className="salesPic" src={Burger} alt={"photoHomePage"}></img> 
                   <div className='vide'>  <span> burger petit marcel <br/> <br/> </span>
                   Cheddar, Steak 150g, Tomates, 1/2 St<br/>  Marcelin, Frites Maison
                   </div>

                   </div>
                   <div className='sales'> 
                    <img  className="salesPic" src={Fromage} alt={"photoHomePage"}></img> 
                    <div className='vide'> <span> Camembert Roti <br/><br/></span>
                    Camembert Rôti, Jambon fumé, Rosette,<br/> Coppa, Lard, Pomme de terres et Salade</div>
                    </div>

                  
                   <div className='sales'>
                    <img  className="salesPic" src={PizzaV} alt={"photoHomePage"}></img> 
                    <div className='vide'>  <span> le bagel saumon <br/><br/> </span> 
                    Philadelphia, Salade, Saumon, Frites  <br/> Maison</div>
                   </div>
                   <div className='sales'>
                    <img  className="salesPic" src={Table} alt={"photoHomePage"}></img> 
                    <div className='vide'> <span> bachos du bercail <br/> <br/></span>
                    Chips tortilla, fromage, poivrons, <br/> tomates, viande hachée</div>
                   </div>
                     
                   </div>

      
    </div>
  )
}

export default Carte