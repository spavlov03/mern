import {useState,useEffect} from 'react'; 
import axios from 'axios'; 



const Pokemon = () => {
  const [pokemons,setPokemons] = useState([]);
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response)
        setPokemons(response.data.results)})
      
      
      
    },[]);
  return (
    <div>
      <h1>All Pokemons</h1>
      {pokemons.map((pokemon,index) => { 
        return (<div key={index}>
          <li className='pokemon'>Name : {pokemon.name}</li>
          </div>)
      })}
    </div>
  )
}

export default Pokemon