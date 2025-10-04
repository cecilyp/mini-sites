import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InvitationCard from './Components/InvitationCard';
import MummyOverlay from './Components/MummyOverlay';
import BackgroundElements from './Components/BackgroundElements';
import { useAudio } from '../GlobalComponents/AudioProvider';
import './halloween-styles.css';
import {SpiderConfig} from "./Components/Spider";
import {BatConfig} from "./Components/Bat"; // Use the consolidated CSS file

interface HalloweenCardProps {
    onBack?: () => void;
}

const spiderData: SpiderConfig[] = [
    { left: '20%', duration: '12s', delay: '0s' },
    { left: '80%', duration: '10s', delay: '3s' },
    { left: '50%', duration: '14s', delay: '6s' },
    { left: '10%', duration: '9s', delay: '1s' },
    { left: '90%', duration: '11s', delay: '5s' },
];

const batData: BatConfig[] = [
    { top: '10%', duration: '10s', delay: '0s' },
    { top: '25%', duration: '8s', delay: '3s' },
    { top: '5%', duration: '12s', delay: '6s' },
    { top: '40%', duration: '9s', delay: '1s' },
];

const HalloweenCard: React.FC<HalloweenCardProps> = ({ onBack }) => {
    const navigate = useNavigate();
    const [showMummy, setShowMummy] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const { playAudio } = useAudio();

    const handleMummyReveal = () => {
        setShowCard(true);
        playAudio(10000); // 10 second fade-in

        setTimeout(() => {
            setShowMummy(false);
        }, 1500);
    };

    const handleBackToLanding = () => {
        if (onBack) {
            onBack();
        } else {
            navigate('/');
        }
    };

    return (
        <div className="halloween-app">
            {showMummy && (
                <MummyOverlay onReveal={handleMummyReveal} />
            )}

            <BackgroundElements />

            {showCard && (
                <div className="card-container">
                    <InvitationCard
                        spiders={spiderData}
                        bats={batData}
                        onBack={handleBackToLanding}
                        isRevealed={showCard}
                    />
                </div>
            )}
        </div>
    );
};

export default HalloweenCard;
