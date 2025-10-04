import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AudioProvider } from '../GlobalComponents/AudioProvider';
import BirthdayExpressCard from './BirthdayExpressCard';

const NiamasBirthdayPage: React.FC = () => {
    const navigate = useNavigate();

    const handleBackToLanding = () => {
        navigate('/');
    };

    return (
        <AudioProvider
            audioSrc="/audio/waterloo.mp3"
            buttonColor="#DC241F"
        >
            <BirthdayExpressCard onBack={handleBackToLanding} />
        </AudioProvider>
    );
};

export default NiamasBirthdayPage;
