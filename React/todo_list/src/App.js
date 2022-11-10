import './App.css';
import ListItem from './components/ListItem';
import ListForm from './components/ListForm';
import { useState } from 'react';

function App() {
  const [itemsArray,setItemsArray] = useState(() =>{ 
    const savedItems = localStorage.getItem("itemsArray"); 
    if (savedItems) {
      return JSON.parse(savedItems); 
    } else { 
      return [];
    }
  }); 
  
 
  

  const addItem = (newItem) => {
    setItemsArray(newItem);
  }

  return (
    <div className="App">
      <ListForm itemsArray={itemsArray} addItem={addItem} />
      {/* <ListForm onNewItem = {addItem}/> */}
      <ListItem itemsArray={itemsArray} setItemsArray={setItemsArray}/>
    </div>
  );
}

export default App;
