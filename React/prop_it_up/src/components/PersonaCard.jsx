import { useState } from "react"

const PersonaCard = (props) => {
  const  [birthday, setBirthday ] = useState(props.age); 
   return (
    <div className="personaCard">
      <h2>{props.lastName},{props.firstName}</h2>
      <h6>Age: {birthday}</h6>
      <h6>Hair Color: {props.hairColor}</h6>
      <button onClick={ (event) => setBirthday(birthday + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
    </div>
   )
}

export default PersonaCard