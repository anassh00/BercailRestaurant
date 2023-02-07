import { Navigate, Route, Routes } from 'react-router-dom';
import {Home , NavBar ,Carte ,Contact,Reserver , Footer ,Restaurant} from './Components/index'
import './App.css';



function App() {
  return (
    <div>
    <NavBar/>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Restaurant" element={<Restaurant/>}/>
      <Route path="/Carte" element={<Carte/>}/>
      <Route path="/Reserver" element={<Reserver/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="*" exact={true} element={<Navigate replace to="/"/>} />
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
