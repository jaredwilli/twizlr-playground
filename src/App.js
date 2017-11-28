import React, { Component } from 'react';

// import Twizlr from './components/Twizlr';
import Button from './components/buttons/Button';
import CloseButton from './components/buttons/CloseButton';
import LoginButton from './components/buttons/LoginButton';

import { PROVIDERS } from './constants/loginProviders';

import './App.css';

class App extends Component {
    render() {
        const buttonClicked = () => {
            console.log('Button Clicked!!')
        };

        return (
            <div className="App">
                <h1>Twizlr Components</h1>

                <h2>Button</h2>

                <div className="buttons">
                    <Button />

                    <Button className="icon-button">
                        <i className={`fa fa-times`} />
                        Delete
                    </Button>

                    <Button
                        style={{ width: '200px', margin: '0 10px' }}
                        onClick={() => buttonClicked()} />

                    <Button
                        style={{ background: '#3bd00b', color: '#000' }}
                        onClick={() => buttonClicked()} />
                </div>

                <h2>CloseButton</h2>

                <CloseButton />

                <h2>LoginButton</h2>

                <div className="login-buttons">
                    {(PROVIDERS.map(prov =>
                        <LoginButton
                            displayName={ prov.className }
                            provider={ prov.provider }
                            className={ prov.className }
                            onClick={() => alert(prov.provider)} />
                    ))}
                </div>

            </div>
        );
	}
}

export default App;
