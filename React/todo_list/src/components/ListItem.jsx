const ListItem = (props) => {
  const {itemsArray,setItemsArray} = props; 

  const checkOff = (index) => {
    const updatedItems = itemsArray.map((item,i) => {
      if (index === i ) { 
        // item.complete = !item.complete;
        const updatedItem = {...item,complete: !item.complete}
        return updatedItem
      }
      return item
    }); 
    setItemsArray(updatedItems); 
  }
  const deleteItem = (index) => { 
    const filteredItems = itemsArray.filter((item,i) => {
      return i !== index;  
    })
    setItemsArray(filteredItems);
  }
  return (
    <div className="d-flex gap-2 flex-column mt-2">
      {
      itemsArray.map( (item,index) => (
        <div key={index}>
          <label htmlFor="done" className={item.complete ? 'strike':null}>{item.text}</label>
          <input className="ms-1" type="checkbox" name="done" onChange={ (e) => checkOff(index)} checked={item.complete}/>
          <button className="ms-1" onClick={(e) => deleteItem(index)}>Delete</button>
        </div>
      ))} 
    </div>
  )
}

export default ListItem