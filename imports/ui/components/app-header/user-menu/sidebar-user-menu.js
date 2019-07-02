import React from 'react';
import { connect } from 'react-redux';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import StyledOverlay from '/imports/ui/styled/overlay';
import {
    StyledSidebar,
    StyledMenuList
} from './styled';
import MenuHeader from './menu-header';
import ToggleThemeButton from './toggle-theme-menu-item';
import UserProfileMenuLink from './user-profile-menu-item';
import LogoutMenuButton from './logout-menu-item';

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
                        <MenuHeader />
                        <UserProfileMenuLink loggedInUser={loggedInUser} />
                        <ToggleThemeButton loggedInUser={loggedInUser} />
                        <LogoutMenuButton />
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
