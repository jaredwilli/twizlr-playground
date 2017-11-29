import React from 'react';

import Button from './buttons/Button';
import CloseButton from './buttons/CloseButton';
import LoginButton from './buttons/LoginButton';

import { PROVIDERS } from '../constants/loginProviders';

const Twizlr = (Component) => {


    const buttonClicked = () => {
        console.log('Button Clicked!!')
    };

    return (
        <div>
            <h1>Twizlr Components</h1>


            <h2>Button</h2>

            <Button
                onClick={ () => buttonClicked() } />

            <Button
                className="primary icon-button"
                onClick={ () => buttonClicked() }>
                <i className={`fa fa-check`} />
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
                onClick={ () => buttonClicked()  />

            <Button
                className="danger"
                style={{ color: '#000' }}
                onClick={ () => buttonClicked() } />


            <h2>CloseButton</h2>

            <CloseButton />


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
};

export default Twizlr;
