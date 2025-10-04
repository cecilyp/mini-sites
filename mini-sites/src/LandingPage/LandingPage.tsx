
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1 className="landing-title">Mini Sites</h1>
                <p className="landing-subtitle">Choose your adventure</p>

                <div className="cards-grid">
                    <div
                        className="landing-card halloween-card"
                        onClick={() => handleNavigate('/halloween')}
                    >
                        <div className="card-content">
                            <h2>Halloween Invitation</h2>
                            <p>A spooky invitation card with mummy reveal</p>
                            <span className="card-cta">Enter if you dare →</span>
                        </div>
                    </div>

                    <div
                        className="landing-card birthday-card"
                        onClick={() => handleNavigate('/birthday-express')}
                    >
                        <div className="card-content">
                            <h2>Birthday Express</h2>
                            <p>A festive birthday celebration card</p>
                            <span className="card-cta">Celebrate →</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
