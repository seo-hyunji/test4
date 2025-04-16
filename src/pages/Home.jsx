import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'


const Home = () => {
  const images = [
    {src:'image1.jpg', title:'hello1'}, 
    {src:'image2.jpg', title:'hello2'}, 
    {src:'image3.jpg', title:'hello3'}
  ]
  const [current, setCurrent] = useState(0)
  const [weather, setWeather] = useState(null)
  
  useEffect(()=>{  
    const timer = setInterval(()=>{
      setCurrent( prev => prev === images.length-1 ? 0 : prev + 1)
    }, 5000) 
    return () => clearInterval(timer);
  }, [])

  useEffect (()=>{
    const API_KEY = 'faad9ccd84285fa71815e297a5a3c5ce';
    const CITY = 'ansan'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}}&appid=${API_KEY}&units=metric&lang=kr`;

    const fetchWeather = async () => {
      try {
        const res = await axios.get(URL);
        setWeather(
          {
            temp : res.data.temp,
            description : res.data.weather[0].description,
            icon : res.data.weather[0].icon,
          }
        )
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    fetchWeather();
  }, [])

  return (
    <div className='homeOutbox'>
      {images.map((img, index) =>  (
        <div
        key={index}
        className={`img ${index === current ? 'active' : ''}`}
        style={{backgroundImage: `url(/images/${img.src})`}}
        //git에 올릴 때 style={{backgroundImage: `url(${process.env.Public_URL}/images/${img.src})`}}
        >
          <h1 className={`title ${index === current ? 'on' : ''}`}>
            {img.title}
          </h1>
        </div>
      ))}

    {
      weather && (
        <div className='weather'>
          <img 
          src={'http://openwethermap.org/img/wn' + weather.icon + '@2x.png'} 
          alt={weather.description} 
          referrerPolicy='no-referrer'
          />
          <div>{weather.temp} ℃</div>
          <div>{weather.description}</div>
        </div>
      )
    }

    </div>

    
  )
}

export default Home