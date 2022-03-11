import React, { useMemo } from 'react';

const Room = ({ coords }) => {
    const walls = useMemo(
        () =>
            coords.map((_, i) => {
                const a = coords[i];
                const b = coords[(i + 1) % coords.length];
                return [a, b];
            }),
        [coords],
    );
    return (
        <g>
            {walls.map(([a, b]) => (
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="white" strokeWidth={80} />
            ))}
        </g>
    );
};

export default Room;
