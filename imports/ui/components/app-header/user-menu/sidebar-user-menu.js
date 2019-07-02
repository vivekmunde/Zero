import React from 'react';
import { connect } from 'react-redux';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import StyledOverlay from '/imports/ui/styled/overlay';
import {
    StyledSidebar,
    StyledMenuList
} from './styled';
import SidebarUserMenuHeader from './sidebar-user-menu-header';
import ToggleThemeButton from './toggle-theme-button';
import UserProfileMenuLink from './user-profile-menu-link';

const SidebarUserMenu = ({
    loggedInUser,
    sidebarUserMenuOpen,
}) => {
    return (loggedInUser
        ? (
            <React.Fragment>
                <StyledOverlay
                    styled={{ active: sidebarUserMenuOpen }}
                    onClick={toggleUserMenuReduxAction}
                />
                <StyledSidebar styled={{ active: sidebarUserMenuOpen }}>
                    <StyledMenuList>
                        <SidebarUserMenuHeader />
                        <UserProfileMenuLink loggedInUser={loggedInUser} />
                        <ToggleThemeButton loggedInUser={loggedInUser} />
                    </StyledMenuList>
                </StyledSidebar>
            </React.Fragment>
        )
        : null);
};

export default connect(
    ({
        loggedInUser,
        sidebarUserMenuOpen,
    }) => ({
        loggedInUser,
        sidebarUserMenuOpen,
    }),
)(SidebarUserMenu);
