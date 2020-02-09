import React from 'react';
import { connectDispatch, injectDispatch } from 'duxact';
import StyledBareButton from '/imports/ui/styled/button/bare';
import { StyledFlexAlign, StyledFlexAlignLeft, StyledFlexAlignRight } from '/imports/ui/styled/align';
import { StyledLeftIcon } from '/imports/ui/styled/icon';
import toggleUserMenuDuxAction from '/imports/ui/components/app-header/user-menu/toggle-user-menu-dux-action';
import toggleThemeDuxAction from '/imports/ui/components/app-header/user-menu/toggle-theme-dux-action';
import { StyledMenuListItem } from './styled';

class ToggleThemeMenuItem extends React.Component {

    toggleTheme = () => {
        const { loggedInUser, toggleTheme, toggleUserMenu } = this.props;
        const { _id: userId, profile: { isDarkTheme } } = loggedInUser;
        toggleTheme({ userId: userId, isDarkTheme });
        toggleUserMenu(null);
    }

    render() {
        const { loggedInUser } = this.props;
        return (
            <StyledMenuListItem
                as={StyledBareButton}
                onClick={this.toggleTheme}
            >
                <StyledFlexAlign>
                    <StyledFlexAlignLeft>
                        <StyledLeftIcon className="fa fa-palette" />
                        Dark Mode
                    </StyledFlexAlignLeft>
                    <StyledFlexAlignRight>
                        {loggedInUser.profile.isDarkTheme ? 'ON' : 'OFF'}
                    </StyledFlexAlignRight>
                </StyledFlexAlign>
            </StyledMenuListItem>
        );
    }

}

export default connectDispatch(
    injectDispatch({
        toggleTheme: toggleThemeDuxAction,
        toggleUserMenu: toggleUserMenuDuxAction
    })
)(ToggleThemeMenuItem);