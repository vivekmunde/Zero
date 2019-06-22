import React from 'react';
import { connect } from 'react-redux';
import Link from '../link';
import UserMenu from './user-menu';
import SidebarUserMenu from './user-menu/sidebar-user-menu';

const AppHeader = ({ isLoggedIn }) => (
    <React.Fragment>
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
                        {isLoggedIn
                            ? <UserMenu />
                            : (
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
        <SidebarUserMenu />
    </React.Fragment>
);

export default connect(
    ({ isLoggedIn }) => ({ isLoggedIn })
)(AppHeader);