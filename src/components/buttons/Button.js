import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.css';

const Button = ({
	type = 'button',
	className = '',
    style = {},
    children = 'Submit',
	...props
}) => (
    <button
        type={ type }
        style={ style }
        className={`btn ${className} ${styles.button}`}
        onClick={ event => props.onClick(event) }>
        { children }
    </button>
);
Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.object
    ])
};

export default Button;
