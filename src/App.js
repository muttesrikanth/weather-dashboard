import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const weatherBackgrounds = {
  clear: 'url(./clear.jpg)',
  cloudy: 'url(./cloudy.jpg)',
  rain: 'url(./rain.jpg)',
  snow: 'url(./snow.jpg)',
};

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('Hyderabad');
  const [userType, setUserType] = useState('traveler');
  const [error, setError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    fetchWeather();
  }, [location]);

  const fetchWeather = async () => {
    setError(null); // Reset previous errors
    try {
      // Fetch coordinates from OpenWeatherMap Geocoding API
      const geoResponse = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=358a7cbe7380f0bdaeef008aebb8bf94`
      );

      if (geoResponse.data.length === 0) {
        setError('Location not found. Please try again.');
        return;
      }

      const { lat, lon } = geoResponse.data[0];

      // Fetch weather data from Open-Meteo using the coordinates
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );

      const currentWeather = weatherResponse.data.current_weather;
      setWeather(currentWeather);

      // Set background image based on weather condition
      if (currentWeather.weathercode < 3) {
        setBackgroundImage(weatherBackgrounds.clear);
      } else if (currentWeather.weathercode < 6) {
        setBackgroundImage(weatherBackgrounds.cloudy);
      } else if (currentWeather.weathercode < 10) {
        setBackgroundImage(weatherBackgrounds.rain);
      } else if (currentWeather.weathercode < 13) {
        setBackgroundImage(weatherBackgrounds.snow);
      }
      // Add more conditions as needed
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const renderUserSpecificInfo = () => {
    if (userType === 'traveler') {
      return <p>Great weather for exploring new places! Pack accordingly.</p>;
    } else if (userType === 'farmer') {
      return <p>Perfect time for sowing seeds! Ensure your crops get enough water.</p>;
    } else if (userType === 'event_planner') {
      return <p>Plan your outdoor events! Check for any rain predictions.</p>;
    }
  };

  return (
    <div className="app" style={{ backgroundImage: backgroundImage }}>
      <h1>Weather Dashboard</h1>
      <div className="search">
        <input type="text" value={location} onChange={handleLocationChange} />
        <button onClick={fetchWeather}>Search</button>
      </div>
      <div className="user-type">
        <label>
          <input type="radio" value="traveler" checked={userType === 'traveler'} onChange={handleUserTypeChange} />
          Traveler
        </label>
        <label>
          <input type="radio" value="farmer" checked={userType === 'farmer'} onChange={handleUserTypeChange} />
          Farmer
        </label>
        <label>
          <input type="radio" value="event_planner" checked={userType === 'event_planner'} onChange={handleUserTypeChange} />
          Event Planner
        </label>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{location}</h2>
          <p>Weather Code: {weather.weathercode}</p>
          <p>Temperature: {weather.temperature} °C</p>
          {renderUserSpecificInfo()}
        </div>
      )}
    </div>
  );
};

export default App;
