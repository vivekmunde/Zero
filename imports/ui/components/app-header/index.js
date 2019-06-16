import React from 'react';
import { connect } from 'react-redux';
import Link from '../link';


const AppHeader = ({ isLoggedIn }) => (
    <header className="z-app-header">
        <div className="z-container">
            <div className="z-app-header_sections">
                <div className="z-app-header_section">
                    <Link
                        to="/"
                    >
                        <img src="/images/logo.png" alt="Zero" className="z-app-logo" />
                    </Link>
                </div>
                <div className="z-app-header_section z-app-header_section_spacer" />
                <div className="z-app-header_section z-app-header_section_user-menu">
                    {!isLoggedIn && (
                        <Link
                            to="/sign-up"
                        >
                            <i className="fa fa-user" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    </header>
);

export default connect(
    ({ isLoggedIn }) => ({ isLoggedIn })
)(AppHeader);