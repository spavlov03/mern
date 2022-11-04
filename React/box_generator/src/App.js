import './App.css';
import { useState } from 'react';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox';

function App() {
  // const [ boxColorArray,setBoxColorArray] = useState([]); 
  const [ boxArray,setBoxArray ] = useState([]);
  return (
    <div className="App">
      <BoxForm boxArray={boxArray} setBoxArray={setBoxArray}/>
      <DisplayBox boxArray={boxArray}/>
    </div>
  );
}

export default App;
