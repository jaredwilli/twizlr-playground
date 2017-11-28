import React from 'react';
import PropTypes from 'prop-types';

/*
.drawer-button {
    background: none;
    border-right: 1px solid rgba(64, 64, 64, 0.75);
	box-shadow: 1px 0px 0 0 rgba(255, 255, 255, 0.52);
    border-radius: 0;
    border: 0;
    padding: 5px 12px 7px;

    .fa {
        font-size: 14px;
    }
}
*/
const DrawerButton = ({
	className = 'drawer-button',
	type = 'button',
	icon = 'bars', // ellipsis-h OR ellipsis-v
	style = {},
	...props
}) => (
    <button
		style={ style }
		type={type}
        className={`btn ${className}`}
		onClick={ event => props.onClick(event) }
		{ ...props }>
        <i className={`fa fa-${icon}`} />
    </button>
);

DrawerButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

export default DrawerButton;
