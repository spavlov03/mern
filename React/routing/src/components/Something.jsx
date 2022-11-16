import { useParams } from "react-router-dom"

const Number = () => {
  const {something} = useParams();
  const {textClr} = useParams();
  const {bgClr} = useParams();
  const wordStyle = {
    color: textClr,
    background: bgClr
  }
  if (isNaN(something)) {
  return (
    <div>
      <h2 className="center" style={wordStyle}>The word is: {something}</h2>
      </div>
  )}
  else {
    return (
      <div>
        <h2 className="center" style={wordStyle}>The number is: {something}</h2>
        </div>
    )
  }
}

export default Number