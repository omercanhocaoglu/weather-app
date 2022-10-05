import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from "./List";

import Clock from './Clock';



function Container () {
  
  const API_KEY = `d3dcba5d51d24fd6b68190413222403`;

  let inputCity = `` ;

  const [ weatherData, setWeatherData ] = useState( [] );

  const [location, setLocation] = useState();

  const [country, setCountry] = useState();


  const cityText = () => {

        document.querySelector("#textInput").addEventListener("input", ( e ) => {
            e.preventDefault();

            inputCity= e.target.value;

            console.log(inputCity)
        } )

  };

   const  getData = async ( value ) => {

    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=no&alerts=no`)

    const result = await data.json();

    console.log(result);

    setWeatherData(result.forecast.forecastday);

    setLocation(result.location.name);

    setCountry(result.location.country)

    

  };
  
  
return (
    
    
 <div className='container'>
    
    <div className='row justify-content-center '>

        <div className='col-sm-12 col-md-5 col-lg-4  mt-3'>

            <h1 className='font-monospace text-center'> <i className="fa-solid fa-cloud-moon-rain"></i> Weather <i className="fa-solid fa-cloud-sun"></i></h1>
        
            <div className="input-group mb-3 mt-5">
  
                    <input id='textInput' type="text" 
                    className="form-control" placeholder="Write here..." 
                    aria-label="Recipient's username" aria-describedby="button-addon2" onChange={cityText} />
  
                    <button onClick={ () => getData(inputCity) } className="btn btn-outline-secondary" type="button" id="button-addon2"> Search </button>

            </div>

            

        </div>
        
        
    </div>

    <div> {/* for List */}

            {weatherData.map( item => ( <List key={item.date} location={location} date={item.date} minTemp={item.day.mintemp_c}
            
            maxTemp={item.day.maxtemp_c} condition={ item.day.condition.text } icon={item.day.condition.icon} 

            avgTemp={item.day.avgtemp_c} sunrise={item.astro.sunrise} sunset={item.astro.sunset} wind={item.day.maxwind_kph}

            humidity={item.day.avghumidity} uv={item.day.uv} rainChance={item.day.daily_chance_of_rain} country={country}
            /> ) )}  

            
    

    </div>

    <Clock/>

</div> 

 

  )
};

export default Container;