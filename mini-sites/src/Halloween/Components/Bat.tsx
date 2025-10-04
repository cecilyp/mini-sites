import React from 'react';
export interface BatConfig {
    top: string;
    duration: string;
    delay: string;
}
interface BatProps extends BatConfig {}

const Bat: React.FC<BatProps> = ({ top, duration, delay }) => (
    <div
        className="bat-container"
        style={{
            '--bat-top': top,
            '--bat-duration': duration,
            animationDelay: delay
        } as React.CSSProperties}
    >
        <div className="bat" />
    </div>
);

export default Bat;
