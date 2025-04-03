import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('bg-dark', 'text-white');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('bg-dark', 'text-white');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="text-end my-3">
            <button className="btn btn-outline-primary" onClick={() => setDarkMode(prev => !prev)}>
                Switch to {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
}

export default ThemeSwitcher;
