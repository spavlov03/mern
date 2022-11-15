import { useState } from "react"
import {Link} from 'react-router-dom'

const PersonaCard = (props) => {
  const [ ofAge, setOfAge ] = useState(props.initialStock);
   return (
    <div className="personaCard">
      <h2>{props.lastName},{props.firstName}</h2>
      <h6>Age: {props.age}</h6>
      <h6>Hair Color: {props.hairColor}</h6>
      <p>Of Age: { ofAge }</p>
      <button onClick={ (event) => setOfAge(ofAge - 1)}>Buy {props.lastName}</button>
      <Link to={"/"}>Go To Main</Link>
    </div>
   )
}

export default PersonaCard