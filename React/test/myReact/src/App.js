import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import PersonaCard from './components/PersonaCard';

function App() {
  return (
    <div className="App">
      <Component />
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <PersonaCard firstName={"Svet"} lastName={"Pavlov"} age={34} hairColor={"Bald"} initialStock={19}/>
      <PersonaCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} initialStock={55}/>
      <PersonaCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} initialStock={15}/>
      <PersonaCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} initialStock={8}/>
      <PersonaCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Blonde"} initialStock={5}/>
    </div>
  );
}

export default App;
