
import React, { useEffect, useRef } from 'react';
export interface SpiderConfig {
    left: string;
    duration: string;
    delay: string;
}

interface SpiderProps extends SpiderConfig {
    index: number;
    isRevealed: boolean;
}

const Spider: React.FC<SpiderProps> = ({ left, duration, delay, index, isRevealed }) => {
    const spiderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!spiderRef.current) return;

        const uniqueId = `spider-${index}`;
        const randomDrop = Math.random() * 170 + 80;
        const durationS = parseFloat(duration);
        const delayS = parseFloat(delay) || 0;
        const pauseDurationS = 1.5;
        const dropPercent = 20;
        const pausePercent = (pauseDurationS / durationS) * 100;
        const fallStartPercent = dropPercent + pausePercent;

        // Create and append dynamic styles to document head
        let styleElement = document.getElementById(`spider-style-${uniqueId}`);
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = `spider-style-${uniqueId}`;
            document.head.appendChild(styleElement);
        }

        styleElement.textContent = `
            @keyframes crawl-${uniqueId} {
                0% { top: -50px; }
                ${dropPercent}% { top: ${randomDrop}px; }
                ${fallStartPercent}% { top: ${randomDrop}px; }
                100% { top: 600px; }
            }
            @keyframes thread-snap-${uniqueId} {
                0% { opacity: 0; }
                ${dropPercent - 5}% { opacity: 1; }
                ${fallStartPercent}% { opacity: 1; }
                ${fallStartPercent + 0.1}%, 100% { opacity: 0; }
            }
            @keyframes web-lifecycle-${uniqueId} {
                0%, ${dropPercent - 0.1}% { opacity: 0; transform: translateX(-50%) scale(0); }
                ${dropPercent}% { opacity: 1; transform: translateX(-50%) scale(0.1); }
                ${dropPercent + (pausePercent / 2)}% { opacity: 1; transform: translateX(-50%) scale(1); }
                ${fallStartPercent}% { opacity: 1; transform: translateX(-50%) scale(1); }
                ${fallStartPercent + 0.1}%, 100% { opacity: 0; transform: translateX(-50%) scale(0); }
            }
        `;

        // Set the CSS custom properties on the element
        const element = spiderRef.current;
        element.style.setProperty('--crawl-end-top', `${randomDrop}px`);
        element.style.setProperty('--crawl-animation-name', `crawl-${uniqueId}`);
        element.style.setProperty('--thread-animation-name', `thread-snap-${uniqueId}`);
        element.style.setProperty('--web-animation-name', `web-lifecycle-${uniqueId}`);
        element.style.setProperty('--crawl-delay', `${delayS}s`);

        return () => {
            // Cleanup: remove the style element when component unmounts
            const styleEl = document.getElementById(`spider-style-${uniqueId}`);
            if (styleEl) {
                document.head.removeChild(styleEl);
            }
        };
    }, [index, duration, delay]);

    return (
        <div
            className="spider-wrapper"
            ref={spiderRef}
            style={{
                '--spider-left': left,
                '--crawl-duration': duration,
                '--crawl-delay': delay
            } as React.CSSProperties}
        >
            <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20"/>
                <path
                    d="M50,50 l-30,-30 m15,0 l30,30 m0,-15 l-30,30 m15,0 l30,-30 M50,50 l-30,30 m15,0 l30,-30 m0,15 l-30,-30 m15,0 l30,30"
                    stroke="#1a1a1a"
                    strokeWidth="5"
                />
            </svg>
        </div>
    );
};

export default Spider;
