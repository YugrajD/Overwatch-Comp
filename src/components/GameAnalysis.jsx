import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GameLogAnalysis.css';

const GameLogAnalysis = () => {
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnalysis = async () => {
            try {
                const token = localStorage.getItem('authToken'); // Get the token from localStorage
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await axios.get('http://127.0.0.1:8000/api/analyze/', {
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                console.log('Fetched Data:', response.data);  // Log the fetched data
                setAnalysis(response.data);
            } catch (err) {
                console.error('Error fetching data:', err);  // Log any errors
                setError(err.message || 'An error occurred'); // Set a string as the error message
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysis();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>; // Ensure error is a string
    }

    return (
        <div>
        <h1>Game Analysis</h1>
        <div>
            <h2>Win/Loss Ratio</h2>
            <p>Wins: {analysis.win_loss_ratio?.Win || 0}</p>
            <p>Losses: {analysis.win_loss_ratio?.Loss || 0}</p>
            <p>Draws: {analysis.win_loss_ratio?.Draw || 0}</p>
        </div>
        <div>
            <h2>Average Stats</h2>
            <p>Eliminations: {analysis.average_stats?.eliminations?.toFixed(2)}</p>
            <p>Assists: {analysis.average_stats?.assists?.toFixed(2)}</p>
            <p>Deaths: {analysis.average_stats?.deaths?.toFixed(2)}</p>
            <p>Damage: {analysis.average_stats?.damage?.toFixed(2)}</p>
            <p>Healing: {analysis.average_stats?.healing?.toFixed(2)}</p>
            <p>Mitigation: {analysis.average_stats?.mitigation?.toFixed(2)}</p>
        </div>
        <div>
            <h2>Performance Trends</h2>
            {/* Add your chart or graph here for performance trends */}
        </div>
    </div>
    );
};

export default GameLogAnalysis;