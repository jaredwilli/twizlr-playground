import React from 'react';
import PropTypes from 'prop-types';

import './close-button.css';

const CloseButton = ({
	type = 'button',
	className = '',
	style = {},
	...props
}) => (
    <button
		type={ type }
        style={ style }
        aria-label="Close"
        className={`${className} close`}
        onClick={ event => props.onClick(event) }>
        { !props.icon && <span aria-hidden="true">&times;</span> }
        { props.icon && <span aria-hidden="true">{ props.icon }</span> }
    </button>
);

CloseButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired
};

export default CloseButton;
