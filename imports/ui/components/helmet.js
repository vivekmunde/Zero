import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ children }) => (
    <ReactHelmet>
        <meta charSet="utf-8" />
        {children}
    </ReactHelmet>
);

export default Helmet;