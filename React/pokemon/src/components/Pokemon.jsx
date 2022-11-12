import {useState,useEffect} from 'react'



const Pokemon = () => {
  const [pokemons,setPokemons] = useState([]);
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        setPokemons(response.results)})
      
      
      
    },[]);
  return (
    <div>
      {pokemons.map((pokemon,index) => { 
        return (<div key={index}>
          <li>Name : {pokemon.name}</li>
          </div>)
      })}
    </div>
  )
}

export default Pokemon