import React, { useState, useEffect } from 'react';
import './greetings.css';

const Greetings = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour >= 5 && hour < 12) {
            return { message: 'Good Morning!', emoji: '🌅' };
        } else if (hour >= 12 && hour < 17) {
            return { message: 'Good Afternoon!', emoji: '☀️' };
        } else {
            return { message: 'Good Evening!', emoji: '🌙' };
        }
    };

    const { message, emoji } = getGreeting();
    const timeString = currentTime.toLocaleTimeString();

    return (
        <div className="greeting-card">
            <div className="greeting-content">
                <div className="greeting-emoji">{emoji}</div>
                <h1 className="greeting-message">{message}</h1>
                <p className="greeting-subtitle">Welcome to our amazing application!</p>
                <div className="time-display">
                    <span className="time-label">Current Time:</span>
                    <span className="time-value">{timeString}</span>
                </div>
            </div>
        </div>
    );
};

export default Greetings;
