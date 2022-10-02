import TextForm from './Components/TextForm';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import { BrowserRouter } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import {
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [Mode, setMode] = useState('light')

  const toogleMode = () => {
    if (Mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042b64';
    }

    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
    }
  }


  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar title='Text Utils' mode={Mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      {/* <Routes> */}

      <TextForm heading='Enter The Text To Analyze' mode={Mode} />
      {/* <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter The Text To Analyze' mode={Mode} />} /> */}
      {/* <Route path="/About" element={<About title=" About Us" />} /> */}
      {/* </Routes>
      </BrowserRouter>
      <Outlet /> */}
    </div>


  );
}

export default App;
