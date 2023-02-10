import React from "react";
import './Footer.css'
import imageLogo from '../../Assets/image26.png'
import colab1 from '../../Assets/chouffe.png'
import colab2 from '../../Assets/Kasteel.png'
import colab3 from '../../Assets/bachus.png'
import instagram from '../../Assets/Frame.png'
import facebook from '../../Assets/Frame(1).png'
import { useNavigate } from "react-router-dom";


const Footer = () => {
  let navigate = useNavigate(); 
  const routeChange = (path) =>{ 
    navigate(path);
   
  }

return (
<>   
<div className="Footer">
    <div className="informations">
      <h6> Au Bercail</h6>
      <address> 14 Quai Antoine Riboud <br/> 69002 Lyon, France</address>
      <p><a style={{color : "white"}} href="tel:123-456-7890"> 04 87 37 02 87</a></p>
    </div>

    <div className="links">

      <div onClick={() => routeChange('/')} className="Footerlinks"> <a href="."></a>Home</div>
      <div onClick={() => routeChange('/Restaurant')} className="Footerlinks"> <a href="rrer"></a>Le Restaurant</div>
      <div onClick={() => routeChange('/Carte')} className="Footerlinks"> <a href=".re"></a>La Carte</div>
      <div onClick={() => routeChange('/Reserver')} className="Footerlinks"> <a href="re."></a>Reserver</div>
      <div onClick={() => routeChange('/Contact')} className="Footerlinks"> <a href=".d"></a>Contact</div>

      </div>

      <div className="logoFooter" >
      <img  className="logoImg" src={imageLogo} alt={"logo"}></img>
      </div>

      <div className="colaborators">
      <img className="colabs"src={colab1} alt={"logo"}></img>
      <img className="colabs"src={colab2} alt={"logo"}></img>
      <img className="colabs"src={colab3} alt={"logo"}></img>

      </div>

      <div className="socialMedia">
      <div>
      <img style={{width:"32px " , padding:"3px", cursor : "pointer"}} onClick={()=> window.open("https://www.facebook.com/Au-Bercail-Bar-%C3%A0-Bi%C3%A8res-Lyon-100213935878702")} src={instagram} alt={"logo"}></img> 
      <img style={{width:"32px " , padding:"3px", cursor : "pointer"}} onClick={()=> window.open("https://www.instagram.com/aubercaillyon/")} src={facebook} alt={"logo"}></img>
      </div>
      <p className="Footerlinks"> Montions légales</p>
      <p className="Footerlinks">Politique de confidentialité</p>

      </div>
</div>

</>    
)
  }

 export default Footer