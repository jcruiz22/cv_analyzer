import React from 'react';

type ScoreBadgeProps = {
    score: number;
};

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
    // Determine badge color and label based on score
    let badgeColor = '';
    let textColor = '';
    let label = '';

    if (score > 70) {
        badgeColor = 'bg-green-100';
        textColor = 'text-green-800';
        label = 'Strong';
    } else if (score > 49) {
        badgeColor = 'bg-yellow-100';
        textColor = 'text-yellow-800';
        label = 'Good start';
    } else {
        badgeColor = 'bg-red-100';
        textColor = 'text-red-800';
        label = 'Needs work';
    }

    return (
        <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 ${badgeColor}`}>
            <p className={`text-xs font-medium ${textColor}`}>{label}</p>
        </div>
    );
};

export default ScoreBadge;