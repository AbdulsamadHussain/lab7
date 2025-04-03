import React from 'react';
import WeatherWidget from '../components/WeatherWidget';
import SkillList from '../components/SkillList';

function Home() {
    return (
        <div className="container mt-4">
            <h1>Welcome to My Portfolio</h1>
            <WeatherWidget />
            <SkillList />
        </div>
    );
}

export default Home;
