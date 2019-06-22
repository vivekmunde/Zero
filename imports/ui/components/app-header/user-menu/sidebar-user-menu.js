import React from 'react';
import { connect } from 'react-redux';
import toggleUserMenuReduxAction from './toggle-user-menu-redux-action';
import Link from '../../link';

const SidebarUserMenu = ({
    loggedInUser,
    sidebarUserMenuOpen,
}) => (
        loggedInUser
            ? (
                <React.Fragment>
                    <div
                        className={`z-sidebar-user-menu_overlay ${sidebarUserMenuOpen ? 'z-sidebar-user-menu_overlay_active' : ''}`}
                        onClick={toggleUserMenuReduxAction}
                    />
                    <div
                        className={`z-sidebar-user-menu ${sidebarUserMenuOpen ? 'z-sidebar-user-menu_active' : ''}`}
                    >
                        <div className="z-list z-list_divided z-list_vertical z-sidebar-user-menu_list">
                            <div className="z-list_item">
                                <div className="z-flex-align">
                                    <div className="z-flex-align_left">
                                        Account Info
                                    </div>
                                    <div className="z-flex-align_right">
                                        <button
                                            className="z-button z-button_bare z-sidebar-user-menu_button-close"
                                            onClick={toggleUserMenuReduxAction}
                                        >
                                            <i className="fa fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link
                                className="z-list_item z-sidebar-user-menu_item"
                                to={`/users/${loggedInUser._id}/profile`}
                                onClick={toggleUserMenuReduxAction}
                            >
                                <i className="far fa-user z-icon z-list_item_icon z-list_item_icon_left" />
                                My profile
                            </Link>
                        </div>
                    </div>
                </React.Fragment>
            )
            : null
    );

export default connect(
    ({
        loggedInUser,
        sidebarUserMenuOpen,
    }) => ({
        loggedInUser,
        sidebarUserMenuOpen,
    }),
)(SidebarUserMenu);