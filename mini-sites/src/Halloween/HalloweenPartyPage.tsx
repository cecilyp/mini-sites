import React from 'react';
import HalloweenCard from './HalloweenCard';
import {AudioProvider} from "../GlobalComponents/AudioProvider";

const HalloweenPartyPage: React.FC = () => {
    return (
        <AudioProvider
            audioSrc="/audio/skeletons.mp3"
            buttonColor="#ff4500"
        >
            <HalloweenCard />
        </AudioProvider>
    );
};

export default HalloweenPartyPage;
