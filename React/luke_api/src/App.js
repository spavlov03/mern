import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './components/Form';
import People from './components/People'
import Planets from './components/Planets'
import Starships from './components/Starships'

function App() {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
