import React, { useEffect } from 'react';

export interface TrainLineConfig {
    class: string;
    color: string;
    top: string;
    duration: string;
    delay: string;
    mobile: boolean;
}

const TrainBackground: React.FC = () => {
    useEffect(() => {
        createTrains();
    }, []);

    const createTrains = () => {
        const trainDepot = document.getElementById('train-depot');
        if (!trainDepot) return;

        const trainLines: TrainLineConfig[] = [
            { class: 'reverse', color: 'central', top: '1%', duration: '25s', delay: '0s', mobile: true },        // 1%
            { class: '', color: 'victoria', top: '19.8%', duration: '24s', delay: '0s', mobile: true },          // 1% + 18.8% = 19.8%
            { class: '', color: 'metropolitan', top: '38.6%', duration: '29s', delay: '0s', mobile: true },      // 19.8% + 18.8% = 38.6%
            { class: 'reverse', color: 'district', top: '57.4%', duration: '28s', delay: '0s', mobile: true },   // 38.6% + 18.8% = 57.4%
            { class: 'reverse', color: 'circle', top: '76.2%', duration: '18s', delay: '0s', mobile: true },     // 57.4% + 18.8% = 76.2%
            { class: '', color: 'jubilee', top: '95%', duration: '19s', delay: '0s', mobile: true },             // 95%
        ];


        let trainHTML = '';
        trainLines.forEach(line => {
            const numCarriages = Math.floor(Math.random() * 4) + 3;
            let carriagesHTML = '';
            for (let i = 0; i < numCarriages; i++) {
                carriagesHTML += `<div class="carriage ${line.color}"></div>`;
            }

            const mobileClass = line.mobile ? '' : 'hidden';

            trainHTML += `
                <div class="train-container ${line.class} ${mobileClass}" style="--top-pos: ${line.top}; --duration: ${line.duration}; --delay: ${line.delay};">
                    ${carriagesHTML}
                </div>
            `;
        });
        trainDepot.innerHTML = trainHTML;
    };

    return <div id="train-depot" className="absolute inset-0 z-0"></div>;
};

export default TrainBackground;
