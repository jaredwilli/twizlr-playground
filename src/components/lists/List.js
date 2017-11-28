import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items = [], ...props }) => (
	<ul className={`list ${props.className}`}>
		{props.items.map((item, index) =>
			props.itemRenderer(item, index)
		)}
	</ul>
);

List.propTypes = {
	items: PropTypes.array.isRequired,
	listItemFunc: PropTypes.func.isRequired
};

List.defaultProps = {
    items: []
};

export default List;
