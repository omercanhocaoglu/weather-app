import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function List (props) {
  
  const {date, maxTemp, minTemp, condition, icon, avgTemp, 
    location, sunrise, sunset, wind, humidity, uv, rainChance, country} = props;
  
  
return (
    
    <div className='row justify-content-center mt-3'>
        
        
        

        <div className='col-md-6'>

            <div className="card">
                
                <div className="card-body">

                    <h1 className='text-center font-monospace'> {location} / {country} </h1>
                    
                    <h3 className="card-title h2"> <span className='h1 text-primary'> Daily: </span> {avgTemp} °C <img src={icon}/>  </h3>

                    <h5 className="card-title h2"> {condition} </h5>
                    
                    
                    <p className="card-text"> <span className='h4'> Date: </span> {new Date(date).toDateString()}  </p>

                    <p className="card-text"> <span className='h4 text-primary'> Min Temp: </span> {minTemp} °C <i className="fa-solid fa-temperature-arrow-down"></i> / <span className='h4 text-danger'> Max Temp: </span> {maxTemp} °C  <i className="fa-solid fa-temperature-arrow-up"></i> </p>

                    <p className="card-text"> <span className='h4 text-warning'> Sunrise: </span> {sunrise}  <i className="fa-regular fa-sun"></i>
                    / <span className='h4 text-black-50'> Sunset: </span> {sunset} <i className="fa-regular fa-moon"></i> </p>

                    <p className="card-text"> <span className='h4 text-success'> Max Wind: </span> {wind} km/s <i className="fa-solid fa-wind"></i> </p>

                    <p className="card-text"> <span className='h4 text-primary'> Humidity: </span> {humidity} % </p>

                    <p className="card-text"> <span className='h4 text-danger'> UV: </span> {uv} <i className="fa-solid fa-sun"></i>  </p>

                    <p className="card-text"> <span className='h4 text-secondary'> Chance of Rain </span> {rainChance} <i className="fa-solid fa-umbrella"></i>  </p>
    
    
                </div>
            
            </div>

        </div>
    
    
    
    </div>
  )
};

export default List;