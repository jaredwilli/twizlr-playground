////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// Make `withMouse` a "higher-order component" that sends the mouse position
// to the component as props.
//
// Hint: use `event.clientX` and `event.clientY`
//
// Got extra time?
//
// Make a `withCat` HOC that shows a cat chasing the mouse around the screen!
////////////////////////////////////////////////////////////////////////////////

import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import * as styles from './styles'

const withMouse = ({ message }) => (Component) => {
	return class WithMouse extends React.Component {
		displayName = 'WithMouse';

		state = {
			clientX: 0,
			clientY: 0
		};

		handleMouse = event => {
			const { clientX, clientY } = event;

            this.setState(() => {
				return {
					clientX: clientX,
					clientY: clientY
				};
			});
		};

		render() {
			return (
				<div>
					{ message }
					<Component
						{ ...this.props }
						mouse={{ x: this.state.clientX, y: this.state.clientY }}
						onMouseMove={ this.handleMouse }
					/>
				</div>
			);
		}
	};
};

export function WithMouseHoF({ mouse, onMouseMove, children }) {
	return <div>{ React.Children.only(children({ mouse, onMouseMove })) }</div>;
}

export class WithMouseAdaptor extends React.Component {
	render() {
		const Component = withMouse(this.props)(WithMouseHoF);

		return <Component>{this.props.children}</Component>;
	}
}

// class App extends React.Component {
// 	render() {
// 		return (
// 			<WithMouseAdaptor message="Cool">
// 				{({ mouse, onMouseMove }) => (
// 					<div style={styles.container} onMouseMove={onMouseMove}>
// 						{mouse ? (
// 							<h1>
// 								The mouse position is ({mouse.x}, {mouse.y})
// 							</h1>
// 						) : (
// 							<h1>We don't know the mouse position yet :(</h1>
// 						)}
// 					</div>
// 				)}
// 			</WithMouseAdaptor>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('app'));
