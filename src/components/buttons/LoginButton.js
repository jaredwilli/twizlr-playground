import React from 'react';
import PropTypes from 'prop-types';

import styles from './login-button.css';

const LoginButton = ({
	style = {},
	type = 'button',
	className = 'facebook', // google, twitter, github
	displayName = 'Facebook', // Google, Twitter, Github
	provider = 'fbProvider', // gProvider, twProvider, ghProvider
	...props
}) => (
	<button
		type={type}
		style={style}
		className={`btn ${style[provider]}`}
		onClick={() => props.onClick(provider)}>
		<i className={`fa fa-${className}`} />
		<span className="btnText">
			{`Sign in with ${displayName}`}
		</span>
	</button>
);

LoginButton.propTypes = {
    style: PropTypes.object,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
	displayName: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default LoginButton;
