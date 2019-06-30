import React from 'react';
import { connect } from 'react-redux';
import Link from '/imports/ui/components/link';
import toggleUserMenuReduxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-redux-action';
import StyledOverlay from '/imports/ui/styled/overlay';
import { StyledIcon } from '/imports/ui/styled/icon';
import { StyledFlexAlign, StyledFlexAlignLeft, StyledFlexAlignRight } from '/imports/ui/styled/align';
import {
    StyledSidebar,
    StyledMenuList,
    StyledMenuListItem,
    StyledMenuListLeftIcon,
    StyledSidebarCloseButton
} from './styled';

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
                        <StyledMenuListItem>
                            <StyledFlexAlign>
                                <StyledFlexAlignLeft>
                                    Account Info
                                </StyledFlexAlignLeft>
                                <StyledFlexAlignRight>
                                    <StyledSidebarCloseButton
                                        onClick={toggleUserMenuReduxAction}
                                    >
                                        <StyledIcon className="fa fa-times" />
                                    </StyledSidebarCloseButton>
                                </StyledFlexAlignRight>
                            </StyledFlexAlign>
                        </StyledMenuListItem>
                        <StyledMenuListItem
                            as={Link}
                            to={`/users/${loggedInUser._id}/profile`}
                            onClick={toggleUserMenuReduxAction}
                        >
                            <StyledMenuListLeftIcon className="far fa-user" />
                            My profile
                        </StyledMenuListItem>
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