import { useState } from "react"

const PersonaCard = (props) => {
  const [ ofAge, setOfAge ] = useState(props.initialStock);
   return (
    <div className="personaCard">
      <h2>{props.lastName},{props.firstName}</h2>
      <h6>Age: {props.age}</h6>
      <h6>Hair Color: {props.hairColor}</h6>
      <p>Of Age: { ofAge }</p>
      <button onClick={ (event) => setOfAge(ofAge - 1)}>Buy {props.lastName}</button>
    </div>
   )
}

export default PersonaCard