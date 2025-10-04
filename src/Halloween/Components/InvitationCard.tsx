
import React, { useEffect, useState } from 'react';
import Spider, { SpiderConfig } from './Spider';
import {BatConfig} from "./Bat";

interface InvitationCardProps {
    spiders?: SpiderConfig[];
    bats: BatConfig[];
    onBack?: () => void;
    isRevealed?: boolean;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
                                                           spiders = [],
                                                           bats,
                                                           onBack,
                                                           isRevealed = false
                                                       }) => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (isRevealed) {
            setTimeout(() => {
                setShowAnimation(true);
            }, 500);
        }
    }, [isRevealed]);

    return (
        <div className="relative">
            <div className={`invitation-card ${showAnimation ? 'lights-on start-reveal' : ''}`}>
                {/* Spiders */}
                {spiders.map((spider, i) => (
                    <Spider
                        key={i}
                        {...spider}
                        index={i}
                        isRevealed={showAnimation}
                    />
                ))}

                {/* Corner webs */}
                <div className="corner-web top-left"></div>
                <div className="corner-web top-right"></div>
                <div className="corner-web bottom-left"></div>
                <div className="corner-web bottom-right"></div>

                {/* Card content */}
                <h1 className="font-creepster text-orange-500 flicker-text main-title">
                    You're Invited
                </h1>

                <div className="card-content">
                    <p className="subtitle">...if you dare!</p>

                    <div className="event-details">
                        <h2 className="event-title">A Halloween Haunting</h2>
                        <p className="event-subtitle">Join us for a night of frights and delights</p>
                    </div>

                    <div className="info-grid">
                        <div className="info-item">
                            <div className="info-icon">🕕</div>
                            <span className="info-text">6:30 PM 'til Midnight</span>
                            <span className="info-subtext">Saturday, 1st Nov 2025</span>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <span className="info-text">The Crypts at:</span>
                            <span className="info-location">NW5 2RZ</span>
                        </div>
                    </div>

                    <div className="requirements">
                        <div className="requirement">
                            <div className="requirement-title">BYOB</div>
                            <div className="requirement-subtitle">(Bring Your Own Booze)</div>
                        </div>
                        <div className="requirement">
                            <div className="requirement-title">Costumes</div>
                            <div className="requirement-subtitle">(Required!)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitationCard;
