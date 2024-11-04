function Weather({name,temp,humidity,wind}) {
  return(
   <div className='weather'>
      <div>
     <h3 >{temp}&deg;C</h3>
     <h2>{name}</h2>
      </div>
     <div className="details">
        <div className="col">
          
          <div><p className="humidity">{humidity}%</p><p>humidity</p></div>
          </div>
        <div className="col">
          <div><p className="wind">{wind}km</p><p>wind</p></div>
  
        </div>
    </div>
  </div>
  )

}
export default Weather
