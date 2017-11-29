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

                <Button
                    className="custom-button"
                    onClick={ () => buttonClicked() }>
                    Custom
                </Button>
                <Button
                    className="primary icon-button"
                    onClick={ () => buttonClicked() }>
                    <i className="fa fa-check margin-right" />
                    Primary
                </Button>
                <Button
                    className="warning"
                    style={{ margin: '0 10px' }}
                    onClick={ () => buttonClicked() } />
                <Button
                    className="info"
                    onClick={ () => buttonClicked() } />
                <Button
                    className="success"
                    style={{ color: '#000' }}
                    onClick={ () => buttonClicked() } />
                <Button
                    className="danger"
                    onClick={ () => buttonClicked() } />
                <Button
                    className="inverse"
                    style={{ color: '#fff' }}
                    onClick={ () => alert('Inverse button') }>
                    <i className={`fa fa-times`} />
                </Button>
                <Button
                    className="faded"
                    style={{ color: '#000' }}
                    onClick={ () => alert('Faded button') } />

                {/************************/}

                <h2>CloseButton</h2>

                <CloseButton
                    onClick={ () => buttonClicked() }/>

                <CloseButton
                    onClick={ () => buttonClicked() }/>

                {/************************/}


                <h2>LoginButton</h2>

                <div className="login-buttons">
                    {PROVIDERS.map(prov =>
                        <LoginButton
                            displayName={ prov.displayName }
                            provider={ prov.provider }
                            className={ prov.className }
                            onClick={ () => alert(prov.provider) } />
                    )}
                </div>
            </div>
        );
	}
}

export default App;
