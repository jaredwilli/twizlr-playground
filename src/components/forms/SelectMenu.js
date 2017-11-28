import React from 'react';

const SelectMenu = ({ defaultValue = 'Choose an option...', ...props }) => {
    if (!props) {
        return <div className="empty hidden"></div>;
    }

    const selectedValue = props.value || defaultValue;

    return (
        <select
            name={props.name}
            value={selectedValue}
            className={props.className}
            onChange={event => props.onChange(event)}>
            {props.children}
        </select>
    );
}

export default SelectMenu;



// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import './styles.css'

// const { func, any } = PropTypes


// ////////////////////////////////////////////////////////////////////////////////
// // Requirements
// //
// // Make this work like a normal <select><option/></select>

// class Select extends React.Component {
//   static propTypes = {
//     onChange: func,
//     value: any,
//     defaultValue: any
//   }

//   static childContextTypes = {
//     select: PropTypes.shape({
//       onClick: PropTypes.func.isRequired
//     })
//   }

//   state = {
//     value: this.props.value ||
//       this.props.defaultValue ||
//       'Please select a value...',
//     isOpen: false
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.value) {
//       this.setState({
//         value: nextProps.value
//       })
//     }
//   }

//   onOptionClick = (value) => () => {
//     this.setState({
//       value,
//       isOpen: false
//     }, () => this.props.onChange && this.props.onChange(this.state.value))
//   }

//   onClick = () => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     })
//   }

//   getChildContext() {
//     return {
//       select: {
//         onClick: this.onOptionClick
//       }
//     }
//   }

//   render() {
//     const { value, isOpen } = this.state
//     return (
//       <div className="select">
//         <div className="label" onClick={this.onClick}>{value} <span className="arrow">▾</span></div>
//         {isOpen && <div className="options">
//           {this.props.children}
//         </div>
//         }
//       </div>
//     )
//   }
// }


// class Option extends React.Component {
//   static contextTypes = {
//     select: PropTypes.shape({
//       onClick: PropTypes.func.isRequired
//     }).isRequired
//   }

//   static propTypes = {
//     value: PropTypes.string.isRequired,
//     children: PropTypes.any
//   }

//   render() {
//     const { select: { onClick } } = this.context
//     const { value, children } = this.props
//     return (
//       <div className="option" onClick={onClick(value)}>{children}</div>
//     )
//   }
// }
