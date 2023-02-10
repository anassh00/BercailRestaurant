import React, { useState } from 'react'
import "./Contact.css"
import ReactLoading from "react-loading";
import bckgrndImage from '../../Assets/bckgrndImageBis3.png'
import postService from '../../Services/post.service';
import { Alert } from 'reactstrap';

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [messageTxt, setMessageTxt] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleNom = (event) => {
    setNom(event.target.value);
  }
  const handlePrenom = (event) => {
    setPrenom(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleMessageTxt = (event) => {
    setMessageTxt(event.target.value);
  }
  const handleSend = async () => {
    let sendMessage = await postService.saveMessage(prenom, nom, email, messageTxt).then(() => setShowAlert(true));
  }
  const handleSubmit = () => {
    handleSend();
  }
  return (
    <div className='contactPage'>
      <div className='HomePageImg'>  <img style={{ width: "100%", height: "100%" }} src={bckgrndImage} alt={"photoHomePage"}></img>
      <div className='titleContact'> Contact </div>
        <div className='opening'>
          <div>
            <p>  <a href="tel:123-456-7890"> 04 87 37 02 87</a>   </p>
            <p>  14 Quai Antoine Riboud, 69002 Lyon, France </p>
          </div>
          <div>
            <p> Lundi - Samedi </p>
            <p>  Dimanche </p>
          </div>
          <div>
            <p> 12h-23h</p>
            <p>12h-22h</p>
          </div>

        </div>
      </div>
      <div className='formContact'>
        {/* {loading && <ReactLoading type={"spinningBubbles"} color="#000000" className='spinner' />} */}
        {showAlert && <Alert>
          Votre message a été envoyer avec succès !
        </Alert>}
        <strong style={{marginBottom : "20px"}}>   Formulaire de Contact : </strong>
        <input onChange={handleNom} placeholder='Nom' style={{ border: " 1px solid green", marginBottom: "20px", paddingBottom: "10px", width: '40%' }} type={"text"} />
        <input onChange={handlePrenom} placeholder='Prénom' style={{ border: " 1px solid green", marginBottom: "20px", paddingBottom: "10px", width: '40%' }} type={"text"} />
        <input onChange={handleEmail} placeholder='E-mail' style={{ border: " 1px solid green", marginBottom: "20px", paddingBottom: "10px", width: '40%' }} type={"text"} />
        <textarea onChange={handleMessageTxt} placeholder='Dites Nous quelque chose ...' style={{ outline: "none", width: '40%' }} cols="4" rows="5"></textarea>
        <button className='reservationBtn2' style={{ marginTop: "10px" }} onClick={handleSubmit} value={messageTxt}> Envoyer</button>

      </div>

    </div>
  )
}

export default Contact