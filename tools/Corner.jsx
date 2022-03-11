import React from 'react';

const Corner = ({ at: { x, y }, thickness }) => (
    <circle
        cx={x}
        cy={y}
        r={thickness * 0.75}
        stroke="white"
        strokeWidth={thickness / 3}
        fill="rgba(64, 92, 176, 0.9)"
    />
);

export default Corner;
