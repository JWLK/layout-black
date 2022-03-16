import React, { useMemo } from 'react';
import RenderBox from '@Tools/RenderBox';
import { Object } from './data.json';

const ObjectSample = () => {
    return (
        <>
            {Object.map((r) => (
                <RenderBox {...r} />
            ))}
        </>
    );
};

export default ObjectSample;
