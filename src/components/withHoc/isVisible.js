import React from 'react';
import PropTypes from 'prop-types';

const visible = (isVisible) => (Component) => {
	class VisibleComponent extends React.Component {
		componentDidMount() {
			this.unsubscribe = this.context.store.subscribe(
				this.handleChange.bind(this)
			);
		}

		componentWillUnmount() {
			this.unsubscribe();
		}

		handleChange() {
			this.forceUpdate();
		}

		render() {
			const show = isVisible(this.context.store.getState());

			if (!show) {
				return null;
			}

			return <Component { ...this.props } />;
		}
	}

	VisibleComponent.contextTypes = {
        store: PropTypes.object
    };

	return VisibleComponent;
};

export default visible;
