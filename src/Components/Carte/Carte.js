import './Carte.css'
import bckgrndImage from '../../Assets/bckgrndImage.png'



const Carte = () => {
  return (
    <div className='cartePage'>
                   <div className='CImg'>  <img style={{ width: "100%",height: "100%"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                    <button className='carteBtn'>  Drink Good ! </button>
                    <button className='carteBtn'>  Eat Good !  </button>
                   </div>
                   <div className='BestSelers'>

                   <div className='sales'>  
                   <img style={{ width: "100px",height: "70px"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                   </div>
                   <div className='sales'>  
                   <img style={{ width: "70px",height: "70px"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                   </div>
                   <div className='sales'>  
                   <img style={{ width: "70px",height: "70px"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                   </div>
                   <div className='sales'> 
                    <img style={{ width: "70px",height: "70px"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                   </div>
                   <div className='sales'>
                    <img style={{ width: "70px",height: "70px"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                   </div>
                   <div className='sales'>
                    <img style={{ width: "70px",height: "70px"}} src={bckgrndImage} alt={"photoHomePage"}></img> 
                   </div>
                  
                   </div>

      
    </div>
  )
}

export default Carte