const PersonaCard = (props) => {
   return (
    <div className="personaCard">
      <h2>{props.lastName},{props.firstName}</h2>
      <h6>Age: {props.age}</h6>
      <h6>Hair Color: {props.hairColor}</h6>
    </div>
   )
}

export default PersonaCard