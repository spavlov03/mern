import { useState } from "react";

const BoxForm = (props) => {
  const {boxArray,setBoxArray} = props;

  const [color,setColor] = useState("");
  const [size,setSize] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    setBoxArray([...boxArray,
    {
      color:color,
      size:size + "px",
    }
  ])
    setColor(""); 
    setSize("");
  }

  return (
    <div className="mt-5">
      <form onSubmit={createBox}>
        <label htmlFor="color" className="me-3">Color</label>
        <input type="text" name="color" value={color} className="bg-light" onChange={ (e) => setColor(e.target.value)}/>
        <label htmlFor="size">Size</label>
        
        <input type="text" name="size" value={size} className="bg-light" onChange={ (e) => setSize(e.target.value)}/>
        <input type="submit" value="Add" className="btn btn-outline-primary ms-3"/>
      </form>

    </div>
  )
}

export default BoxForm