const ListItem = (props) => {
  const {itemsArray,setItemsArray} = props;

  const checkOff = (index) => {
    const updatedItems = itemsArray.map((item,i) => {
      if (index === i ) { 
        item.complete = !item.complete;
      }
      return item; 
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
    <div>
      {
      itemsArray.map( (item,index) => (
        // const itemClasses = [];
        // if ( item.complete) {
        //   itemClasses.push("strike")
        // }
        <div key={index}>
          <label htmlFor="done" className={item.complete ? 'strike':null}>{item.text}</label>
          <input type="checkbox" name="done" onChange={ (e) => checkOff(index)} checked={item.complete}/>
          <button onClick={(e) => deleteItem(index)}>Delete</button>
        </div>
      ))} 
    </div>
  )
}

export default ListItem