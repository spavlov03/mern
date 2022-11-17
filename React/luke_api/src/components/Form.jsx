import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {
  const [category,setCategory] = useState("");
  const [id,setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/${category}/${id}`);
  }
  return (
    <div className="">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search For:</label>
          <select onChange={(e)=> setCategory(e.target.value)}>
          <option value="">-------</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
          </select>
          <label htmlFor="">ID:</label>
          <input type="text" onChange={(e) => setId(e.target.value)}/>
          <input type="submit" value="Search"/> 
        </form>
      </div>
  )
}

export default Form