import React from 'react';

const withLabel = ({ component: Component }) => {
    return (props) => {
        const { label, ...otherProps } = props;

        // TODO: Add for attribute
        return (
            <span>
                <label>{ label }</label>
                <Component { ...otherProps } />
            </span>
        );
    }
};

export default withLabel;

/*
import withLabel from './with-label';
import Input from 'input';
export default withLabel(Input);
*/
