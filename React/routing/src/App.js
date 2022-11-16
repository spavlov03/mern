import './App.css';
import Home from "./components/Home"
import Something from "./components/Something"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:something" element={<Something />} />
        <Route path="/:something/:textClr/:bgClr" element={<Something />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
