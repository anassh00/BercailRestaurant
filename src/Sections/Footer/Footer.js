import React from "react";
import './Footer.css'
import imageLogo from '../../Assets/imageLogo.png'
import colab1 from '../../Assets/chouffe.png'
import colab2 from '../../Assets/Kasteel.png'
import colab3 from '../../Assets/bachus.png'
import instagram from '../../Assets/Frame.png'
import facebook from '../../Assets/Frame(1).png'




const Footer = () => {
return (
<>   
<div className="Footer">
    <div className="informations">

      <h6> Au Bercail</h6>
      <address> 14 Quai Antoine Riboud <br/> 69002 Lyon, France</address>
      <p>   <a href="tel:123-456-7890"> 04 87 37 02 87</a>    </p>

    </div>

    <div className="links">

      <div className="Footerlinks"> <a href="."></a>Home</div>
      <div className="Footerlinks"> <a href="rrer"></a>Le Restaurent</div>
      <div className="Footerlinks"> <a href=".re"></a>La Carte</div>
      <div className="Footerlinks"> <a href="re."></a>Reserver</div>
      <div className="Footerlinks"> <a href=".d"></a>Contact</div>

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
      <img style={{width:"32px " , padding:"3px"}} src={facebook} alt={"logo"}></img>
      <img style={{width:"32px " , padding:"3px"}} src={instagram} alt={"logo"}></img> 
      </div>
      <p className="Footerlinks"> Montions légales</p>
      <p className="Footerlinks">Politique de confidentialité</p>

      </div>
</div>

</>    
)
  }

 export default Footer