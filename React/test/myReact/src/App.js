import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import PersonaCard from './components/PersonaCard';
import UserForm from './components/UserForm';
import Reducer from './components/Reducer';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import Digimon from './components/Digimon';
import { useState } from 'react';


function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
}
  return (
    <div className="App">
      <Digimon />
      {/* <MessageForm onNewMessage={ youveGotMail } />
      <MessageDisplay message={ currentMsg } /> */}
      
      {/* <Component />
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <UserForm />
      <PersonaCard firstName={"Svet"} lastName={"Pavlov"} age={34} hairColor={"Bald"} initialStock={19}/>
      <PersonaCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} initialStock={8}/>
      <PersonaCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Blonde"} initialStock={5}/> */}
    </div>
  );
}

export default App;
