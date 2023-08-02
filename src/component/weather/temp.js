import React, { useEffect, useState } from 'react'
import WeatherCard from './weatherCard';
import "../style.css"

const Temp= () => {

    const [searchValue, setSearchValue] = useState("Delhi");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInput = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.API_ID}`;

            const res = await fetch(url);

            const data = await res.json();
            console.log(data);

            const {temp, humidity, pressure} = data.main;
            const { main: weathermood } = data.weather[0];
            const {name} = data;
            const {speed} = data.wind
            const {country, sunset} = data.sys
            
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country, 
                sunset
            };

            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(( ) => {
        getWeatherInput();
    }, []);

  return (
    <>
    <div className='body-wheather'>
    <div className='wrap'>
        <div className="search">
            <input type="search" placeholder="search..." autoFocus id='search' className='searchTerm
            ' value={ searchValue } onChange={(e) => setSearchValue(e.target.value)}/>

            <button className='searchButton' type='button' onClick={() => getWeatherInput()}>Search</button>
        </div>
    </div>

    <WeatherCard tempInfo ={tempInfo}/>
    </div>
    </>
  )
}

export default Temp;
