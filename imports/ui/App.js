import React from 'react';
import FacebookAuthButton from './components/externalAuthButtons/FacebookAuthButton';
import GoogleAuthButton from './components/externalAuthButtons/GoogleAuthButton';

const App = () => (
    <div>
        <h1>Zero</h1>
        <FacebookAuthButton />
        <GoogleAuthButton />
    </div>
);

export default App;