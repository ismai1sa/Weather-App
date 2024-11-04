import Weather from './Weather'
import { useState } from "react";

function Search(){
  const [res,setResult]=useState('')
  const [city, setCity] = useState('')
  const [temp,setTemp] = useState('')
  const [humidity,setHumidity] = useState('')
  const [wind,setWind] = useState('')
  const [show,setShow] = useState(false)
  const [namecity,setNameCity] = useState('')
  const CityNamehandlechange = (e)=>{
    setCity(e.target.value)
  } 
  const onClick = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('city', city);

    await fetch('http://localhost:5000/search',{
      method: 'POST',
      body: formData,
    }
    )
     .then(response => response.json())
     .then(data => {
        setResult(data)
        console.log(typeof(data))
        const datastring = data
        console.log(typeof(datastring))
        setNameCity(datastring.location.name)
        setTemp(Math.round(datastring.current.temp_c))
        setHumidity(datastring.current.humidity)
        setWind(datastring.current.wind_mph)
        setShow(true)

    })
     .catch((error) => {
     console.error(error)
     setNameCity('Not found')}
                 
    )
  }
  return(
   <div className="form-control">
      <form onSubmit={onClick} >
        <input type="text" name="city" value={city} onChange={CityNamehandlechange} placeHolder="enter name a city" />
        <input className='btn' type="submit" value="Search" />
      </form>
     {show && <Weather name={namecity} temp={temp} humidity={humidity} wind={wind}/>}
  </div>
  )
}

export default Search
