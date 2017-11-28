import React from 'react';

const withLog = ({ ComposedComponent, ...props }) => {
    console.log(`Rendering ${ComposedComponent.displayName} with props: ${props}`);

    return <ComposedComponent { ...props } />
};

export default withLog;
