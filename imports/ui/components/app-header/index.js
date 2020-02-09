import React from 'react';
import { connectState, arrayToMapStateToProps } from 'duxact';
import StyledContainer from '/imports/ui/styled/container'
import { StyledIcon } from '/imports/ui/styled/icon';
import UserMenu from '/imports/ui/components/app-header/user-menu';
import SidebarUserMenu from '/imports/ui/components/app-header/user-menu/sidebar-user-menu';
import {
    StyledHeader,
    StyledHeaderSections,
    StyledHeaderSection,
    StyledHeaderLogo,
    StyledHeaderLink
} from './styled';

const AppHeader = ({ isLoggedIn }) => (
    <React.Fragment>
        <StyledHeader>
            <StyledContainer>
                <StyledHeaderSections>
                    <StyledHeaderSection>
                        <StyledHeaderLink
                            to="/"
                        >
                            <StyledHeaderLogo src="/images/logo.png" alt="Zero" />
                        </StyledHeaderLink>
                    </StyledHeaderSection>
                    <StyledHeaderSection styled={{ isSpacer: true }} />
                    <StyledHeaderSection>
                        <StyledHeaderLink
                            to="/"
                        >
                            <StyledIcon className="fa fa-home" />
                        </StyledHeaderLink>
                    </StyledHeaderSection>
                    <StyledHeaderSection>
                        {isLoggedIn
                            ? <UserMenu />
                            : (
                                <StyledHeaderLink
                                    to="/sign-up"
                                >
                                    <StyledIcon className="far fa-user" />
                                </StyledHeaderLink>
                            )}
                    </StyledHeaderSection>
                </StyledHeaderSections>
            </StyledContainer>
        </StyledHeader>
        <SidebarUserMenu />
    </React.Fragment>
);

export default connectState(arrayToMapStateToProps(['isLoggedIn']))(AppHeader);