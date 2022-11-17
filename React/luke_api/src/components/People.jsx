import {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const People = (props) => {
  const {id} = useParams();
  const [apiData,setApiData] = useState();


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(response => {
      // console.log(response)
      setApiData(response.data)
      console.log(apiData)
    }).catch(err => console.log(err))
  },[apiData])
  return (
    <div>
      people
      <h2>{apiData.name}</h2>
      <p>Height: {apiData.height}</p>
      <p>Hair Color: {apiData.hair_color}</p>
      <p>Eye Color: {apiData.eye_color}</p>
      <p>Skin Color: {apiData.skin_color}</p>
    </div>

  )
}

export default People