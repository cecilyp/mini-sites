
import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';

interface AudioContextType {
    playAudio: (fadeInDuration?: number) => void;
    pauseAudio: () => void;
    toggleMute: () => void;
    isMuted: boolean;
    isPlaying: boolean;
    showMuteButton: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

interface AudioProviderProps {
    children: ReactNode;
    audioSrc: string;
    buttonColor?: string;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({
                                                                children,
                                                                audioSrc,
                                                                buttonColor = '#ff4500'
                                                            }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showMuteButton, setShowMuteButton] = useState(false);

    const fadeInAudio = (audioElement: HTMLAudioElement, duration: number = 10000) => {
        let currentVolume = 0;
        audioElement.volume = currentVolume;
        const fadeInterval = 100;
        const volumeIncrement = fadeInterval / duration;

        const fadeEffect = setInterval(() => {
            currentVolume += volumeIncrement;
            if (currentVolume >= 1) {
                currentVolume = 1;
                clearInterval(fadeEffect);
            }
            audioElement.volume = currentVolume;
        }, fadeInterval);
    };

    const playAudio = (fadeInDuration: number = 10000) => {
        if (audioRef.current) {
            audioRef.current.muted = false;
            audioRef.current.play();
            fadeInAudio(audioRef.current, fadeInDuration);
            setShowMuteButton(true);
            setIsMuted(false);
            setIsPlaying(true);
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(audioRef.current.muted);
        }
    };

    return (
        <AudioContext.Provider value={{
            playAudio,
            pauseAudio,
            toggleMute,
            isMuted,
            isPlaying,
            showMuteButton
        }}>
            {children}

            {/* Audio element */}
            <audio ref={audioRef} loop autoPlay muted>
                <source src={audioSrc} type="audio/mpeg" />
            </audio>

            {/* Mute button */}
            {showMuteButton && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                    }}
                    style={{
                        position: 'fixed',
                        bottom: '15px',
                        right: '15px',
                        zIndex: 1000,
                        background: buttonColor,
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '24px',
                        cursor: 'pointer'
                    }}
                >
                    {isMuted ? '🔇' : '🔊'}
                </button>
            )}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};
