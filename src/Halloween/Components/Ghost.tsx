import React from 'react';
export interface GhostConfig {
    left: string;
    delay?: string;
    duration?: string;
}


interface GhostProps extends GhostConfig {}

const Ghost: React.FC<GhostProps> = ({ left, delay = '0s', duration = '15s' }) => (
    <div
        className="ghost"
        style={{
            '--ghost-left': left,
            animationDelay: delay,
            animationDuration: duration
        } as React.CSSProperties}
    />
);

export default Ghost;
