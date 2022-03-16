import React, { useMemo } from 'react';
import Wall from '@Tools/Wall';
import Corner from '@Tools/Corner';
import TextDistance from '@Tools/TextDistance';

const WALL_THICKNESS = 100;

const RenderLine = ({ id, coords }) => {
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
                <Wall
                    key={`wall-${a.x},${a.y}-${b.x},${b.y}`}
                    corner1={a}
                    corner2={b}
                    thickness={WALL_THICKNESS}
                />
            ))}
            {coords.map((coord) => (
                <Corner
                    key={`corner-${coord.x},${coord.y}`}
                    at={coord}
                    thickness={WALL_THICKNESS}
                />
            ))}
            {walls.map(([a, b]) => (
                <TextDistance corner1={a} corner2={b} fontSize={130} />
            ))}
        </g>
    );
};

export default RenderLine;
