import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Navbar from "./components/Navbar";
import { useState } from 'react';
import Register from './components/Register';

function App() {

  const [showRegister,setShowRegister] = useState(false);

  const handleRegisterClick = () =>{
    setShowRegister(true);
  }

  return (
    <div className="App">
      <Navbar onRegisterClick={handleRegisterClick}/>
      {showRegister && <Register />}
    </div>
  );
}

export default App;
