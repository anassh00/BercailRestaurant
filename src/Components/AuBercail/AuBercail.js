import React from "react";
import './AuBercail.css';
import instagram from '../../Assets/Frame.png'
import Pics from "../Pics/Pics";

const AuBercail = (props) => {
return (
<>
    <div className='AuBercail'>

    <div className='BercailPics'>
        <Pics width = "85%"  height="80%" borderRadius="100px" />
        <Pics width = "85%" height= "80%" borderRadius="100px" />
        <Pics width = "85%" height= "80%" borderRadius="100px" />
    
    </div>
    
     <div ><img src={instagram} alt={"instagramPic"}></img>
     
     </div>

      <div> @AuBercailLyon</div>

    </div>

</>
)
}
export default AuBercail
