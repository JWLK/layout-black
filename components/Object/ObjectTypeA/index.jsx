import React, { useMemo } from 'react';
import RenderTypeA from '@Tools/RenderTypeA';
import { Object } from './data.json';

const ObjectSample = () => {
    return (
        <>
            {Object.map((r) => (
                <RenderTypeA {...r} />
            ))}
        </>
    );
};

export default ObjectSample;
