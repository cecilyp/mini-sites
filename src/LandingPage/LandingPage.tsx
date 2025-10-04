
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1 className="landing-title">Mini Sites</h1>
                <p className="landing-subtitle">Creative invitations</p>
            </div>
        </div>
    );
};

export default LandingPage;
