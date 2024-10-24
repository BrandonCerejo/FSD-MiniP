import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Tracker.css';

const Tracker = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [workouts, setWorkouts] = useState(null);

    const getWorkouts = async () => {
        const data = [
            {
                type: 'Chest',
                imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            },
            {
                type: 'Abs',
                imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzJTIwd29ya291dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            },
            // Add more workouts as needed...
        ];
        setWorkouts(data);
    };

    useEffect(() => {
        getWorkouts();
    }, []);

    return (
        <div className="tracker-page">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Workouts Section */}
            <h1 className="main-heading">Workouts</h1>
            <div className="workouts-container">
                {
                    workouts && workouts.map((item, index) => {
                        return (
                            <Link to={`/workout/${item.type.toLowerCase()}`} className="workout-card" key={index}>
                                <div
                                    className="workout-card-image"
                                    style={{
                                        backgroundImage: `url(${item.imageUrl})`,
                                    }}
                                ></div>
                                <h2 className="workout-card-title">{item.type}</h2>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Tracker;
