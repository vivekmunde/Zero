import React from 'react';
import AppHeader from './components/AppHeader';
import FacebookAuthButton from './components/externalAuthButtons/FacebookAuthButton';
import GoogleAuthButton from './components/externalAuthButtons/GoogleAuthButton';

const App = () => (
    <div>
        <AppHeader />
        <div className="z-container">
            <div className="z-button-group z-button-group_inline-buttons">
                <FacebookAuthButton />
                <GoogleAuthButton />
                <button
                    className="z-button z-button_blue z-button_small z-button_attached-icon z-button_attached-icon_left"
                >
                    <span className="z-button_icon-container">
                        <i className="fa fa-lightbulb z-button_icon" />
                    </span>
                    Help
                </button>
                <button
                    className="z-button z-button_green z-button_medium z-button_attached-icon z-button_attached-icon_left"
                >
                    <span className="z-button_icon-container">
                        <i className="fa fa-bell z-button_icon" />
                    </span>
                    Warning
                </button>
                <button
                    className="z-button z-button_red z-button_large z-button_attached-icon z-button_attached-icon_right"
                >
                    Comment
                    <span className="z-button_icon-container">
                        <i className="fa fa-comment z-button_icon" />
                    </span>
                </button>
                <button
                    className="z-button z-button_huge z-button_attached-icon z-button_attached-icon_left"
                >
                    <span className="z-button_icon-container">
                        <i className="fa fa-lock z-button_icon" />
                    </span>
                    Lock
                </button>
                <button
                    className="z-button z-button_huge"
                >
                    <i className="fa fa-lock z-button_icon" />
                </button>
            </div>
        </div>
    </div>
);

export default App;