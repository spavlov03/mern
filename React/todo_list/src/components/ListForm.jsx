import { useState } from "react";

const ListForm = (props) => {
  const {itemsArray,addItem} = props;

  const [item,setItem] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (item.length === 0) {
      return;
    }
    const newItem = {
      text: item, 
      complete: false
    }
    addItem([...itemsArray,newItem])
  };
  return (
    <form className='d-flex flex-column gap-2 mt-5' onSubmit={ handleSubmit }>
      <input className='bg-light mx-auto' type="text" onChange ={ (e) => setItem(e.target.value)}/>
      <button className='btn btn-primary mx-auto'>Add</button>
    </form>
  )
}

export default ListForm