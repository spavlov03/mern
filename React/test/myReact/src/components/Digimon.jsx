import { useState,useEffect } from "react";

const Digimon = (props) => {
  const [digimons,setDigimons] = useState(0); 

  useEffect(() => {
    console.log("hello")
    fetch('https://swapi.dev/api/planets')
      .then(response => {
        return response.json()
      })
      .then(response => {
        setDigimons({
          digimon: response.results
        })
      })
  });
  return (
    <div>
      {digimons.digimon ? digimons.digimon.map((item,index) => {
        return (<div className="border border-dark w-25 mx-auto m-2" key={index}>
          <p>Planets: {item.name}</p>
          <p>Terrain: {item.terrain}</p>
          </div>
        )
      }):null}
    </div>
  ); 
}

export default Digimon