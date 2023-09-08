import React from 'react';
import './percentage.css';
 
const percentages = [
    { reliability: 80, performance: 90, comfort: 45, technology: 92 },
    { reliability: 70, performance: 92, comfort: 50, technology: 80 },
    { reliability: 65, performance: 77, comfort: 35, technology: 85 },
    { reliability: 75, performance: 55, comfort: 45, technology: 95 },
    { reliability: 82, performance: 69, comfort: 40, technology: 87 },
];
const percentage = ({ selectedLogo }) => {
    

    const selectedPercentages = percentages[selectedLogo];

    return (
        <section className='body pt-24 flex'>
            <div className='container lg:gap-32 sm:gap-16 gap-16'>
                <div className="progress" style={{ '--i': selectedPercentages.reliability, '--clr': '#43f94a' }}>
                    <h3>{selectedPercentages.reliability}<span>%</span></h3>
                    <h4 className='text-sm'>Reliability</h4>
                </div>
                <div className="progress" style={{ '--i': selectedPercentages.performance, '--clr': '#2ccde9' }}>
                    <h3>{selectedPercentages.performance}<span>%</span></h3>
                    <h4>Perform</h4>
                </div>
                <div className="progress less" style={{ '--i': selectedPercentages.comfort, '--clr': '#fb297b' }}>
                    <h3>{selectedPercentages.comfort}<span>%</span></h3>
                    <h4>Comfort</h4>
                </div>
                <div className="progress" style={{ '--i': selectedPercentages.technology, '--clr': '#ffe047' }}>
                    <h3>{selectedPercentages.technology}<span>%</span></h3>
                    <h4>Technology</h4>
                </div>
            </div>
        </section>
    );
}

export default percentage;
