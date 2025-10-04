
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DepartureBoardOverlay from './Components/DepartureBoardOverlay';
import TrainBackground from './Components/TrainBackground';
import InvitationCard from './Components/InvitationCard';
import { useAudio } from '../GlobalComponents/AudioProvider';
import './birthday-styles.css';

interface BirthdayExpressCardProps {
    onBack?: () => void;
}

const BirthdayExpressCard: React.FC<BirthdayExpressCardProps> = ({ onBack }) => {
    const navigate = useNavigate();
    const [showBoard, setShowBoard] = useState(true);
    const [showCard, setShowCard] = useState(false);
    const [showTrains, setShowTrains] = useState(false);
    const { playAudio } = useAudio();

    const handleBoardReveal = () => {
        setShowCard(true);
        setShowTrains(true);
        playAudio(10000); // 10 second fade-in

        setTimeout(() => {
            setShowBoard(false);
        }, 5000);
    };

    const handleBackToLanding = () => {
        if (onBack) {
            onBack();
        } else {
            navigate('/');
        }
    };

    return (
        <div className="birthday-app">
            {showBoard && (
                <DepartureBoardOverlay onReveal={handleBoardReveal} />
            )}

            {showTrains && (
                <TrainBackground />
            )}

            {showCard && (
                <InvitationCard
                    onBack={handleBackToLanding}
                    isRevealed={showCard}
                />
            )}
        </div>
    );
};

export default BirthdayExpressCard;
