import React from 'react'
import PropTypes from 'prop-types';

const Cover = ({ isActive = false, ...props }) => {
    const activeClass = (isActive) ? 'inline-block' : 'none';

    return <div className={`cover ${activeClass}`} onClick={event => props.onClick(event)} {...props} />;
}

Cover.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Cover;
