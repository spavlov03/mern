import logo from './logo.svg';
import './App.css';
import PersonaCard from './components/PersonaCard';

function App() {
  return (
    <div className="App">
      <PersonaCard firstName={"Svet"} lastName={"Pavlov"} age={34} hairColor={"Bald"} />
      <PersonaCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonaCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      <PersonaCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
      <PersonaCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Blonde"} />
    </div>
  );
}

export default App;
