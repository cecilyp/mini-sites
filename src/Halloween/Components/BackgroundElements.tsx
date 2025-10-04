
import React from 'react';
import Ghost, {GhostConfig} from './Ghost';
import Bat, {BatConfig} from './Bat';

interface BackgroundElementsProps {
    ghosts?: GhostConfig[];
    bats?: BatConfig[];
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({
       ghosts = [
           { left: '5vw' },
           { left: '25vw', delay: '3s', duration: '12s' },
           { left: '45vw', delay: '6s', duration: '14s' },
           { left: '65vw', delay: '8s', duration: '11s' },
           { left: '85vw', delay: '4s', duration: '13s' }
       ],

       bats = [
           { top: '10vh', duration: '10s', delay: '0s' },
           { top: '25vh', duration: '8s', delay: '3s' },
           { top: '5vh', duration: '12s', delay: '6s' },
           { top: '40vh', duration: '9s', delay: '1s' }
       ]
}) => {
    return (
        <div className="background-elements">
            <div className="ghost-container">
                {ghosts.map((ghost, index) => (
                    <Ghost key={index} {...ghost} />
                ))}
            </div>

            <div className="bat-background">
                {bats.map((bat, index) => (
                    <Bat key={index} {...bat} />
                ))}
            </div>
        </div>
    );
};

export default BackgroundElements;
