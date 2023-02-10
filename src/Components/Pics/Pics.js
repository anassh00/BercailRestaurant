import React from "react";
import './Pics.css'
import img1 from '../../Assets/comptoire1.jpeg'
import img2 from '../../Assets/comptoire2.png'


const Pics = (props) => {
 
    return(
   <>
    <div className="BercailPic">
         
         <img style={{height:props.height, width : props.width ,borderRadius:props.borderRadius}}src={img1} alt={"photoRestau"}>
            </img>  
    </div>

    </>
    )

    }
export default Pics