import React, { useEffect, useState } from 'react';

interface InvitationCardProps {
    onBack?: () => void;
    isRevealed?: boolean;
}

const InvitationCard: React.FC<InvitationCardProps> = ({
                                                           onBack,
                                                           isRevealed = false
                                                       }) => {
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        console.log('InvitationCard isRevealed:', isRevealed); // Debug log
        if (isRevealed) {
            // Show card after 8 seconds
            setTimeout(() => {
                console.log('Setting showCard to true'); // Debug log
                setShowCard(true);
            }, 8000); // Just a short delay
        }
    }, [isRevealed]);

    return (
        <div className="birthday-card-container">
            <div className={`invitation-card ${showCard ? 'lights-on' : ''}`}>
                {/* Main title - NO ORANGE! */}
                <h1 className="main-title font-oswald flicker-text">
                    ALL ABOARD
                </h1>

                <div className="card-content">
                    <h2 className="subtitle font-oswald">THE BIRTHDAY EXPRESS</h2>

                    <div className="event-details">
                        <p className="event-title">Next Stop: Niama's 30th Birthday</p>
                    </div>

                    <div className="info-grid">
                        <div className="info-item">
                            <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span className="info-text">Boarding:</span>
                            <span className="info-subtext font-oswald">02/07/26 19:00</span>
                        </div>
                        <div className="info-item">
                            <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span className="info-text">Destination:</span>
                            <span className="info-location font-oswald">NW5 2RZ</span>
                        </div>
                    </div>

                    <div className="requirements">
                        <div className="requirement">
                            <div className="requirement-title font-oswald">DRESS CODE</div>
                            <div className="requirement-subtitle">TUBE STATIONS</div>
                        </div>
                    </div>

                    <div className="event-footer">
                        <p>Mind the gap on the way to the dance floor!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitationCard;
