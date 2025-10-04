
import React, { useEffect, useState } from 'react';

interface DepartureBoardOverlayProps {
    onReveal: () => void;
}

const DepartureBoardOverlay: React.FC<DepartureBoardOverlayProps> = ({ onReveal }) => {
    const [showText, setShowText] = useState(false);
    const [isRevealing, setIsRevealing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
            animateBoard();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const animateBoard = () => {
        const flaps = document.querySelectorAll('.flap');
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        let totalDelay = 0;

        flaps.forEach((flap, i) => {
            const finalChar = flap.getAttribute('data-final');
            if (!finalChar) return; // Guard against null

            if (finalChar === '&nbsp;') {
                flap.innerHTML = '&nbsp;';
                return;
            }

            setTimeout(() => {
                let flipCount = 0;
                const maxFlips = 10 + Math.floor(Math.random() * 10);
                const flipInterval = setInterval(() => {
                    flap.textContent = chars[Math.floor(Math.random() * chars.length)];
                    flap.classList.add('flipping');
                    setTimeout(() => flap.classList.remove('flipping'), 50);
                    flipCount++;
                    if (flipCount >= maxFlips) {
                        clearInterval(flipInterval);
                        flap.innerHTML = finalChar; // Now TypeScript knows finalChar is not null
                    }
                }, 100);
            }, totalDelay);
            totalDelay += 50;
        });
    };

    const handleClick = () => {
        if (isRevealing) return;
        setIsRevealing(true);
        onReveal();
    };

    return (
        <div
            id="departure-board-overlay"
            className={`departure-board-overlay ${showText ? 'show-text' : ''} ${isRevealing ? 'unravel' : ''}`}
            onClick={handleClick}
        >
            <div id="board-text" className="text-xl sm:text-3xl md:text-4xl flex flex-col items-center gap-2 sm:gap-4">
                <div className="flex gap-2 sm:gap-4">
                    <span className="flap" data-final="C">C</span>
                    <span className="flap" data-final="L">L</span>
                    <span className="flap" data-final="I">I</span>
                    <span className="flap" data-final="C">C</span>
                    <span className="flap" data-final="K">K</span>
                    <span className="flap" data-final="&nbsp;">&nbsp;</span>
                    <span className="flap" data-final="T">T</span>
                    <span className="flap" data-final="O">O</span>
                </div>
                <div className="flex gap-2 sm:gap-4">
                    <span className="flap" data-final="B">B</span>
                    <span className="flap" data-final="O">O</span>
                    <span className="flap" data-final="A">A</span>
                    <span className="flap" data-final="R">R</span>
                    <span className="flap" data-final="D">D</span>
                </div>
            </div>
        </div>
    );
};

export default DepartureBoardOverlay;
