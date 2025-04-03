import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await axios.get('https://lab7-backend.onrender.com/api/weather?city=Halifax');
                setWeather(res.data);
            } catch (err) {
                setError('Failed to load weather info.');
            }
        };
        fetchWeather();
    }, []);

    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!weather) return <div>Loading weather...</div>;

    return (
        <div className="card p-3 mt-3">
            <h4>Weather in {weather.city}</h4>
            <p><strong>Temperature:</strong> {weather.temperature}°C</p>
            <p><strong>Humidity:</strong> {weather.humidity}%</p>
            <p><strong>Description:</strong> {weather.description}</p>
        </div>
    );
}

export default WeatherWidget;
