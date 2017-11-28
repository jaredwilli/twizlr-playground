import React from 'react';

const Expandable = ({ ...props }) => {
    return (
        <div className="expandable"
            onClick={event => props.onClick(event, props.type)}>
            {props.type}
        </div>
    );
}

export default Expandable;
