import React, { useMemo } from 'react';
import RenderTypeA from '@Tools/RenderTypeA';

const ObjectSample = ({ Object }) => {
    return (
        <>
            {Object.map((r) => (
                <RenderTypeA {...r} />
            ))}
        </>
    );
};

export default ObjectSample;
