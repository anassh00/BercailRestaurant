import React from "react";
import './AuBercail.css';
import instagram from '../../Assets/Frame.png'
import Pics from "../Pics/Pics";

const AuBercail = (props) => {
return (
<>
    <div className='AuBercail'>

    <div className='BercailPics'>
        <Pics width = "80%"  height="100%" />
        <Pics width = "80%" height= "100%" />
        <Pics width = "80%" height= "100%" />
        <Pics width = "80%" height= "100%" />
        <Pics width = "80%" height= "100%" />
    </div>
    
     <div ><img src={instagram} alt={"instagramPic"}></img>
     
     </div>

      <div> @AuBercailLyon</div>

    </div>

</>
)
}
export default AuBercail
