import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Carte from './Components/Carte/Carte';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Reserver from './Components/Reserver/Reserver';
import Restaurant from './Components/Restaurant/Restaurant';

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Restaurant" element={<Restaurant/>}/>
      <Route path="/Carte" element={<Carte/>}/>
      <Route path="/Reserver" element={<Reserver/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="*" exact={true} element={<Navigate replace to="/"/>} />
    </Routes>
    </div>
  );
}

export default App;
