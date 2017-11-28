import React from 'react';
import PropTypes from 'prop-types';

const PageTemplate = ({ className = 'page', ...props }) => {
    return (
        <div className={`${className}-template page`}>
			{ props.children }
        </div>
    );
};

PageTemplate.propTypes = {
    className: PropTypes.string
};

export default PageTemplate;
