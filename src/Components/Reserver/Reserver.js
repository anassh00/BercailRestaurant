import React, { useState } from 'react'
import "./Reserver.css"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import bckgrndImage from '../../Assets/bckgrndImageBis3.png'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert } from 'reactstrap';
import postService from '../../Services/post.service';

const Reserver = () => {
  const [value, setValue] = React.useState(null);
  const [timeSelected, setTimeSelected] = React.useState('');
  const [nbPersonneSelected, setNbPersonneSelected] = React.useState(null);
  const timeArray = ['11H00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30','19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
  '22:00'];
  const nbArray = [1,2,3,4,5,6,7,8];
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleNom = (event) => {
    setNom(event.target.value);
  }
  const handleTel = (event) => {
    setTel(event.target.value);
  }
  const handlePrenom = (event) => {
    setPrenom(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleChange = (event) => {
    setTimeSelected(event.target.value);
  };

  const handleChangeNbPersonne = (event) => {
    setNbPersonneSelected(event.target.value);
  }

  const [modal, setModal] = useState(false);

  const toggle = () => {setModal(!modal);}

  const handleSend = async () => {
    // const newDate = new Date( value["$y"], value["$M"] + 1, value["$D"]);
    const month = value["$M"] + 1;
    console.log( Date.parse(value));
    let sendReservation = await postService.saveReservation(nom, prenom,tel, email, nbPersonneSelected, value["$D"]+"/"+month+"/"+value["$y"], timeSelected).then(() => {setShowAlert(true);
    toggle();});
  }
  
  const handleSubmit = () => {
    handleSend();
    setTimeSelected('');
    setValue(null);
    setNbPersonneSelected(null);
  }

  return (
    <div >
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
        <div style={{display : "flex", flexDirection : "column", justifyContent : "center", margin : "auto"}}>
          <div style={{marginBottom : "20px"}}>Saissez vos coordonnées : </div>
          <input onChange={handleNom} placeholder='Nom' style={{ border: " 1px solid green", marginBottom: "20px", paddingBottom: "10px"}} type={"text"} />
          <input onChange={handlePrenom} placeholder='Prénom' style={{ border: " 1px solid green", marginBottom: "20px", paddingBottom: "10px"}} type={"text"} />
          <input onChange={handleEmail} placeholder='E-mail' style={{ border: " 1px solid green", marginBottom: "20px", paddingBottom: "10px"}} type={"text"} /> 
          <input onChange={handleTel} placeholder='Téléphone' style={{ border: " 1px solid green", marginBottom: "40px", paddingBottom: "10px"}} type={"text"} /> 
          <button className='reservationBtn2' onClick={handleSubmit}> Réserver </button>
        </div>
        </ModalBody>
      </Modal>
      <div>
        <div className='title'> Faire une réservation </div>
        <div>   <img style={{ height: "100%", width: "100%" }} src={bckgrndImage} alt={"photoHomePage"}></img></div>
      </div>
      <div className='reservationSection'>
        <p> Pour les réservations de plus de 8 personnes, merci de nous contacter  <br /> directement par téléphone au 04 87 37 02 87</p>
        <div className='reservationForm'>
          <div style={{ backgroundColor: "#DFE3C0", borderRadius: "5px", border: "none", outline: "none" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Heure</InputLabel>
              <Select
                style={{ backgroundColor: "#DFE3C0", borderRadius: "5px", border: "none", outline: "none", width: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                dateFormat="dd/MM/yyyy"
                value={timeSelected}
                label="Heure"
                onChange={handleChange}
              >
                {Array.from(timeArray).map((time) => {
                                        return (<MenuItem value={time}>{time}</MenuItem>)
                                    })}
              </Select>
            </FormControl>
          </div>
          <div>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Nombre de personne</InputLabel>
              <Select
                style={{ backgroundColor: "#DFE3C0", borderRadius: "5px", border: "none", outline: "none", width: "100%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={nbPersonneSelected}
                label="Nombre de personne"
                onChange={handleChangeNbPersonne}
              >
                {Array.from(nbArray).map((nb) => {
                                        return (<MenuItem value={nb}>{nb}</MenuItem>)
                                    })}
              </Select>
            </FormControl>
          </div>
          <button className='reservationBtn2' onClick={toggle}> Réserver </button>

        </div>
        {showAlert && <Alert style={{width : "50%", marginLeft : "26%"}}>
          Votre reservation a été enregistré avec succès !
        </Alert>}
      </div>

    </div>
  )
}

export default Reserver