import React, { useEffect, useState } from 'react';

interface MummyOverlayProps {
    onReveal: () => void;
}

const MummyOverlay: React.FC<MummyOverlayProps> = ({ onReveal }) => {
    const [showText, setShowText] = useState(false);
    const [isUnraveling, setIsUnraveling] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setIsUnraveling(true);
        onReveal();
    };

    return (
        <div className={`mummy-overlay ${showText ? 'show-text' : ''} ${isUnraveling ? 'unravel' : ''}`}
             onClick={handleClick}>
            <div className="mummy-text flicker-text">CLICK ME</div>
            <div className="bandage" id="b1" style={{ '--end-rotate': '5deg' } as React.CSSProperties}></div>
            <div className="bandage" id="b2" style={{ '--end-rotate': '-3deg' } as React.CSSProperties}></div>
            <div className="bandage" id="b3" style={{ '--end-rotate': '2deg' } as React.CSSProperties}></div>
            <div className="bandage" id="b4" style={{ '--end-rotate': '-8deg' } as React.CSSProperties}></div>
            <div className="bandage" id="b5" style={{ '--end-rotate': '4deg' } as React.CSSProperties}></div>
            <div className="bandage" id="b6" style={{ '--end-rotate': '-2deg' } as React.CSSProperties}></div>
        </div>
    );
};

export default MummyOverlay;
