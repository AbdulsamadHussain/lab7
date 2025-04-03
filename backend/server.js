require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * GET Projects - Returns project data from JSON file
 */
app.get('/api/projects', (req, res) => {
    fs.readFile('./data/projects.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read projects data' });
        }
        res.json(JSON.parse(data));
    });
});

/**
 * GET Weather - Fetches weather data from OpenWeather API
 */
app.get('/api/weather', async (req, res) => {
    try {
        const city = req.query.city || 'Halifax';
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        const response = await axios.get(weatherURL);
        const { name, main, weather } = response.data;

        res.json({
            city: name,
            temperature: main.temp,
            humidity: main.humidity,
            description: weather[0].description
        });

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
