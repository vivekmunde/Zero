import React from 'react';
import AppHeader from './app-header';

const AppLayout = ({ children, className, ...props }) => (
    <div className={className}>
        <AppHeader {...props} />
        <div className="z-container">
            {children}
        </div>
    </div>
);

export default AppLayout;